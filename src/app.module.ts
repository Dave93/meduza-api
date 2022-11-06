import { Module, Global, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloErrorConverter, extendMapItem, mapItemBases } from 'apollo-error-converter';
import { join } from 'path';
import { Logger } from '@nestjs/common/services/logger.service';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './prisma.service';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { RolesModule } from '@modules/roles/roles.module';
import { RolesPermissionsModule } from './modules/roles_permissions/roles_permissions.module';
import { CacheControlModule } from './modules/cache_control/cache_control.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersModule } from './modules/users/users.module';
import { LinkRecordsModule } from './modules/link_records/link_records.module';
import { CustomersResolver } from './modules/customers/customers.resolver';
import { CustomersModule } from './modules/customers/customers.module';
import { OrderStatusModule } from './modules/order_status/order_status.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderActionsModule } from './modules/order_actions/order_actions.module';
import { OrdersLocationsModule } from './modules/orders_locations/orders_locations.module';
import { BgJobsModule } from './modules/bg_jobs/bg_jobs.module';
import { BullModule } from '@nestjs/bull';
import * as redisStore from 'cache-manager-redis-store';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchModule } from './modules/search/search.module';
import { ApiTokensModule } from './modules/api_tokens/api_tokens.module';
import { ExternalModule } from './modules/external/external.module';
import { ConnectClientsModule } from './modules/connect_clients/connect_clients.module';
import { ProductCategoriesModule } from './modules/product_categories/product_categories.module';
import { ProductsModule } from './modules/products/products.module';
import { SystemConfigsModule } from './modules/system_configs/system_configs.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    ScheduleModule.forRoot(),
    // DatabaseModule,
    // AdminModule,
    // AuthModule,
    // OtpModule,

    // GraphQLModule.forRoot<MercuriusDriverConfig>({
    //   driver: MercuriusDriver,
    //   autoSchemaFile: '~schema.gql',
    // subscription: true,
    // }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
      prefix: 'meduza_tasks_',
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: '127.0.0.1',
      port: 6379,
    }),
    CacheControlModule,
    RolesModule,
    RolesPermissionsModule,
    PermissionsModule,
    AuthModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: '~schema.gql',
      subscriptions: {
        'graphql-ws': true,
        path: '/ws',
      },
    }),
    UsersModule,
    LinkRecordsModule,
    CustomersModule,
    OrderStatusModule,
    OrdersModule,
    OrderActionsModule,
    OrdersLocationsModule,
    BgJobsModule,
    SearchModule,
    ApiTokensModule,
    ExternalModule,
    ConnectClientsModule,
    ProductCategoriesModule,
    ProductsModule,
    SystemConfigsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {
  static port: number;
  static apiVersion: string;
  static apiPrefix: string;
  static isDevMode: boolean;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('API_PORT');
    AppModule.apiVersion = this.configService.get('API_VERSION');
    AppModule.apiPrefix = this.configService.get('API_PREFIX');
    AppModule.isDevMode = this.configService.get('API_DEBUG') === 'true';
  }
}
