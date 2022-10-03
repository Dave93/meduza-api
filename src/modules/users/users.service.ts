import { Injectable } from '@nestjs/common';
import { FindManyusersArgs } from 'src/@generated/users/find-manyusers.args';
import { UpdateOneusersArgs } from 'src/@generated/users/update-oneusers.args';
import { usersWhereInput } from 'src/@generated/users/users-where.input';
import { usersCreateArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserInput: usersCreateArgs) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserInput.data.password, saltOrRounds);
    createUserInput.data.password = hashedPassword;
    return this.prismaService.users.create(createUserInput);
  }

  usersConnection(where: usersWhereInput) {
    return this.prismaService.users.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findAll(params: FindManyusersArgs) {
    return this.prismaService.users.findMany({
      ...params,
      include: {
        users_roles_usersTousers_roles_user_id: {
          include: {
            roles: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    let res = await this.prismaService.users.findUnique({
      where: {
        id,
      },
      include: {
        users_roles_usersTousers_roles_user_id: {
          include: {
            roles: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return res;
  }

  update(updateUserInput: UpdateOneusersArgs) {
    return this.prismaService.users.update(updateUserInput);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
