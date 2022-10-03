import { CACHE_MANAGER, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/prisma.service';
import { order_status } from '../../@generated/order-status/order-status.model';
import { api_tokens } from '../../@generated/api-tokens/api-tokens.model';
import { terminals } from '../../@generated/terminals/terminals.model';
import { delivery_pricing } from '../../@generated/delivery-pricing/delivery-pricing.model';

@Injectable()
export class CacheControlService implements OnModuleInit {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly prismaService: PrismaService) {}
  async onModuleInit() {
    await this.cacheAll();
  }

  async cacheAll() {
    await this.cacheOrderStatus();
    await this.invalidateCache('api_tokens');
    await this.invalidateCache('roles');
  }

  /** Caching Start */

  async cacheOrderStatus() {
    const orderStatus = await this.prismaService.order_status.findMany();
    return this.cacheManager.set('orderStatus', orderStatus, { ttl: 0 });
  }

  /** Caching end */

  /** Getters start */

  getOrderStatus() {
    return this.cacheManager.get('orderStatus');
  }

  getOrderStatuses(): Promise<order_status[]> {
    return this.cacheManager.get('orderStatus');
  }

  getAllApiTokens(): Promise<api_tokens[]> {
    return this.cacheManager.get('api_tokens');
  }

  getCachedRoles() {
    return this.cacheManager.get('roles');
  }

  /** Getters end */

  // async getAllWorkSchedules() {
  //   let workSchedules: work_schedules[] = await this.cacheManager.get('workSchedules');
  //   return workSchedules;
  // }
  async invalidateCache(source: string) {
    await this.cacheManager.del(source);
    switch (source) {
      case 'api_tokens':
        const apiTokens = await this.prismaService.api_tokens.findMany();
        return this.cacheManager.set('api_tokens', apiTokens, { ttl: 0 });
      case 'roles':
        const roles = await this.prismaService.roles.findMany({
          include: {
            roles_permissions: {
              select: {
                permissions: {
                  select: {
                    slug: true,
                  },
                },
              },
            },
          },
        });
        const result = roles.map((role) => {
          return {
            id: role.id,
            name: role.name,
            code: role.code,
            permissions: role.roles_permissions.map((rolePermission) => rolePermission.permissions.slug),
          };
        });
        return this.cacheManager.set('roles', result, { ttl: 0 });
    }
  }
}
