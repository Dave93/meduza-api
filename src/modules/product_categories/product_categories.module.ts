import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './product_categories.service';
import { ProductCategoriesResolver } from './product_categories.resolver';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  providers: [ProductCategoriesResolver, ProductCategoriesService, PrismaService, CacheControlService],
})
export class ProductCategoriesModule {}
