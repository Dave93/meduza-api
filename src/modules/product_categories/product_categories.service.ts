import { Injectable } from '@nestjs/common';
import { UpdateProductCategoryInput } from './dto/update-product_category.input';
import { product_categoriesCreateArgs } from '../../helpers/create-one.args';
import { product_categoriesWhereInput } from '../../@generated/product-categories/product-categories-where.input';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { Args } from '@nestjs/graphql';
import { FindManyproductCategoriesArgs } from '../../@generated/prisma/find-manyproduct-categories.args';
import { UpdateOneproductCategoriesArgs } from '../../@generated/prisma/update-oneproduct-categories.args';

@Injectable()
export class ProductCategoriesService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  create(createProductCategoryInput: product_categoriesCreateArgs) {
    return this.prismaService.product_categories.create(createProductCategoryInput);
  }

  findAll(@Args() params: FindManyproductCategoriesArgs) {
    return this.prismaService.product_categories.findMany(params);
  }

  findOne(id: string) {
    return this.prismaService.product_categories.findUnique({
      where: {
        id,
      },
    });
  }

  update(updateProductCategoryInput: UpdateOneproductCategoriesArgs) {
    return this.prismaService.product_categories.update(updateProductCategoryInput);
  }

  remove(id: string) {
    return this.prismaService.product_categories.delete({
      where: {
        id,
      },
    });
  }

  orderStatusConnection(where: product_categoriesWhereInput) {
    return this.prismaService.product_categories.aggregate({
      where,
      _count: {
        id: true,
      },
    });
  }
}
