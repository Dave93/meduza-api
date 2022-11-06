import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductCategoriesService } from './product_categories.service';
import { ProductCategory } from './entities/product_category.entity';
import { UpdateProductCategoryInput } from './dto/update-product_category.input';
import { Permissions } from '@auth';
import { product_categoriesCreateArgs } from '../../helpers/create-one.args';
import { product_categories } from '../../@generated/product-categories/product-categories.model';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { product_categoriesWhereInput } from '../../@generated/product-categories/product-categories-where.input';
import { FindManyproductCategoriesArgs } from '../../@generated/prisma/find-manyproduct-categories.args';
import { UpdateOneproductCategoriesArgs } from '../../@generated/prisma/update-oneproduct-categories.args';

@Resolver(() => ProductCategory)
export class ProductCategoriesResolver {
  constructor(private readonly productCategoriesService: ProductCategoriesService) {}

  @Mutation(() => product_categories)
  @Permissions('product_categories.create')
  productCategoryCreate(@Args() createOrderStatusInput: product_categoriesCreateArgs) {
    return this.productCategoriesService.create(createOrderStatusInput);
  }

  @Query(() => PrismaAggregateCount, { name: 'productCategoriesConnection' })
  @Permissions('product_categories.list')
  productCategoriesConnection(@Args('where') where: product_categoriesWhereInput) {
    return this.productCategoriesService.orderStatusConnection(where);
  }

  @Query(() => [product_categories], { name: 'productCategories' })
  @Permissions('product_categories.list')
  findAll(@Args() params: FindManyproductCategoriesArgs) {
    return this.productCategoriesService.findAll(params);
  }

  @Query(() => product_categories, { name: 'productCategory' })
  @Permissions('product_categories.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.productCategoriesService.findOne(id);
  }

  @Mutation(() => product_categories)
  @Permissions('product_categories.edit')
  updateProductCategory(@Args() updateProductCategoryInput: UpdateOneproductCategoriesArgs) {
    return this.productCategoriesService.update(updateProductCategoryInput);
  }

  @Mutation(() => product_categories)
  @Permissions('product_categories.delete')
  removeProductCategory(@Args('id', { type: () => String }) id: string) {
    return this.productCategoriesService.remove(id);
  }
}
