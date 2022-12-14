import { BadRequestException, Injectable } from '@nestjs/common';
import { user_status } from 'src/@generated/prisma/user-status.enum';
import { PrismaService } from 'src/prisma.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { createHash, createCipheriv, createDecipheriv, scryptSync } from 'crypto';
import { generate } from 'otp-generator';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { DateTime } from 'luxon';
import { Auth, SendOtpToken } from './entities/auth.entity';
import { ErrorType } from '@common/enums';
import { DisabledUserException } from '@common/http/exceptions';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './dto/jwt-payload.dto';
import { TokenService } from './services/token.service';
import { LoginResponseDto } from './dto';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private configService: ConfigService,
    private tokenService: TokenService,
  ) {}
  create(createAuthInput: CreateAuthInput) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    const user = new Auth();
    user.exampleField = 45;
    return user;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async verifyOtp(phone: string, otp: string, verificationKey: string) {
    const currentdate = new Date();

    if (!verificationKey) {
      throw new BadRequestException('Verification key is missing');
    }

    if (!otp) {
      throw new BadRequestException('OTP is missing');
    }
    if (!phone) {
      throw new BadRequestException('Phone is missing');
    }

    let decoded;

    //Check if verification key is altered or not and store it in variable decoded after decryption
    try {
      decoded = await this.decode(verificationKey);
    } catch (err) {
      throw new BadRequestException('Verification key is invalid');
    }
    const obj = JSON.parse(decoded);
    const check_obj = obj.check;

    // Check if the OTP was meant for the same email or phone number for which it is being verified
    if (check_obj != phone) {
      throw new BadRequestException('OTP was not sent to this particular phone number');
    }

    const otp_instance = await this.prismaService.otp.findUnique({
      where: {
        id: obj.otp_id,
      },
    });

    //Check if OTP is available in the DB
    if (otp_instance != null) {
      //Check if OTP is already used or not
      if (otp_instance.verified != true) {
        //Check if OTP is expired or not

        if (DateTime.fromJSDate(currentdate) < DateTime.fromJSDate(otp_instance.expiry_date)) {
          //Check if OTP is equal to the OTP in the DB
          if (otp === otp_instance.otp) {
            otp_instance.verified = true;
            await this.prismaService.otp.update({
              where: {
                id: otp_instance.id,
              },
              data: {
                verified: true,
              },
            });

            const user = await this.prismaService.users.findUnique({
              where: {
                id: otp_instance.user_id,
              },
              select: {
                id: true,
                login: true,
                is_super_user: true,
                status: true,
                first_name: true,
                last_name: true,
                is_online: true,
              },
            });

            if (user.status == user_status.blocked) {
              throw new DisabledUserException(ErrorType.BlockedUser);
            }
            if (user.status == user_status.inactive) {
              throw new DisabledUserException(ErrorType.InactiveUser);
            }

            const dto = new UserResponseDto();

            dto.id = user.id;
            dto.phone = user.login;
            dto.first_name = user.first_name;
            dto.last_name = user.last_name;
            dto.status = user_status[user.status];
            dto.is_super_user = user.is_super_user;
            dto.is_online = user.is_online;

            const payload: JwtPayload = { id: user.id, login: user.login };
            const token = await this.tokenService.generateAuthToken(payload);
            const permissions = await this.prismaService.users_permissions.findMany({
              where: {
                user_id: user.id,
              },
              include: {
                permissions: true,
              },
            });
            let additionalPermissions = permissions.map(({ permissions: { slug } }) => slug);
            const userRoles = await this.prismaService.users_roles.findMany({
              where: {
                user_id: user.id,
              },
              include: {
                roles: {
                  include: {
                    roles_permissions: {
                      include: {
                        permissions: true,
                      },
                    },
                  },
                },
              },
            });
            console.log(userRoles);
            userRoles.map(({ roles: { roles_permissions } }) => {
              console.log(roles_permissions);
            });
            const rolePermissions = [];
            userRoles.map(({ roles: { roles_permissions } }) => {
              roles_permissions.map(({ permissions: { slug } }) => {
                rolePermissions.push(slug);
              });
            });
            additionalPermissions = [...additionalPermissions, ...rolePermissions];
            return {
              token,
              user: dto,
              access: {
                additionalPermissions: additionalPermissions,
                roles: userRoles.map(({ roles: { name, code, active } }) => ({ name, code, active })),
              },
            };
            // const response = { Status: 'Success', Details: 'OTP Matched', Check: check };
            // return res.status(200).send(response);
          } else {
            throw new BadRequestException('OTP NOT Matched');
          }
        } else {
          throw new BadRequestException('OTP Expired');
        }
      } else {
        throw new BadRequestException('OTP Already Used');
      }
    } else {
      throw new BadRequestException('OTP Not Found');
    }
  }

  async generateRefreshToken(refreshToken: string) {
    return this.tokenService.generateRefreshToken(refreshToken);
  }

  sha1(input) {
    return createHash('sha1').update(input).digest();
  }

  password_derive_bytes(password, salt, iterations, len) {
    let key = Buffer.from(password + salt);
    for (let i = 0; i < iterations; i++) {
      key = this.sha1(key);
    }
    if (key.length < len) {
      const hx = this.password_derive_bytes(password, salt, iterations - 1, 20);
      for (let counter = 1; key.length < len; ++counter) {
        key = Buffer.concat([key, this.sha1(Buffer.concat([Buffer.from(counter.toString()), hx]))]);
      }
    }
    return Buffer.alloc(len, key);
  }

  async encode(string: string) {
    const password = this.configService.get<string>('CRYPTO_KEY');
    // var iv = Buffer.from(this.configService.get<string>('CRYPTO_IV'));
    // var ivstring = iv.toString('hex');
    const iv = Buffer.alloc(16, 0);
    const key = scryptSync(password, 'GfG', 24);
    const cipher = createCipheriv('aes-192-cbc', key, iv);
    const part1 = cipher.update(string, 'utf8');
    const part2 = cipher.final();
    const encrypted = Buffer.concat([part1, part2]).toString('base64');
    return encrypted;
  }

  async decode(string) {
    const password = this.configService.get<string>('CRYPTO_KEY');
    const iv = Buffer.alloc(16, 0);
    const key = scryptSync(password, 'GfG', 24);
    const decipher = createDecipheriv('aes-192-cbc', key, iv);
    let decrypted = decipher.update(string, 'base64', 'utf8');
    decrypted += decipher.final();
    return decrypted;
  }

  AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  async login(login: string, password: string) {
    const user = await this.prismaService.users.findUnique({
      where: {
        login,
      },
    });
    if (!user) {
      throw new BadRequestException('User Not Found');
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new BadRequestException('Invalid Password');
    }

    if (user.status == user_status.blocked) {
      throw new DisabledUserException(ErrorType.BlockedUser);
    }
    if (user.status == user_status.inactive) {
      throw new DisabledUserException(ErrorType.InactiveUser);
    }

    const dto = new UserResponseDto();

    dto.id = user.id;
    dto.phone = user.login;
    dto.first_name = user.first_name;
    dto.last_name = user.last_name;
    dto.status = user_status[user.status];
    dto.is_super_user = user.is_super_user;
    dto.is_online = user.is_online;

    const payload: JwtPayload = { id: user.id, login: user.login };
    const token = await this.tokenService.generateAuthToken(payload);
    const permissions = await this.prismaService.users_permissions.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        permissions: true,
      },
    });
    let additionalPermissions = permissions.map(({ permissions: { slug } }) => slug);
    const userRoles = await this.prismaService.users_roles.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        roles: {
          include: {
            roles_permissions: {
              include: {
                permissions: true,
              },
            },
          },
        },
      },
    });
    console.log(userRoles);
    userRoles.map(({ roles: { roles_permissions } }) => {
      console.log(roles_permissions);
    });
    const rolePermissions = [];
    userRoles.map(({ roles: { roles_permissions } }) => {
      roles_permissions.map(({ permissions: { slug } }) => {
        rolePermissions.push(slug);
      });
    });
    additionalPermissions = [...additionalPermissions, ...rolePermissions];
    return {
      token,
      user: dto,
      access: {
        additionalPermissions: additionalPermissions,
        roles: userRoles.map(({ roles: { name, code, active } }) => ({ name, code, active })),
      },
    };
  }
}
