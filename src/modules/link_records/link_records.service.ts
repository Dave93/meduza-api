import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LinkRecordsService {
  constructor(private readonly prismaService: PrismaService) {}

  async linkUserToRoles(user_id: string, role_id: string) {
    await this.prismaService.users_roles.deleteMany({
      where: {
        user_id,
      },
    });
    return this.prismaService.users_roles.create({
      data: {
        user_id,
        role_id,
      },
    });
  }
}
