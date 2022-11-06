import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { productCreateArgs } from '../../helpers/create-one.args';
import { product } from '../../@generated/product/product.model';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { Permissions } from '@auth';
import { product_categoriesWhereInput } from '../../@generated/product-categories/product-categories-where.input';
import { productWhereInput } from '../../@generated/product/product-where.input';
import { FindManyproductArgs } from '../../@generated/product/find-manyproduct.args';
import { UpdateOneproductArgs } from '../../@generated/product/update-oneproduct.args';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => product)
  @Permissions('product.create')
  productCreate(@Args() createProductInput: productCreateArgs) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => PrismaAggregateCount, { name: 'productsConnection' })
  @Permissions('product.list')
  productConnection(@Args('where') where: productWhereInput) {
    return this.productsService.orderStatusConnection(where);
  }

  @Query(() => [product], { name: 'products' })
  @Permissions('product.list')
  findAll(@Args() params: FindManyproductArgs) {
    return this.productsService.findAll(params);
  }

  @Query(() => product, { name: 'product' })
  @Permissions('product.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => product)
  @Permissions('product.edit')
  updateProduct(@Args() updateProductInput: UpdateOneproductArgs) {
    return this.productsService.update(updateProductInput);
  }

  @Mutation(() => product)
  removeProduct(@Args('id', { type: () => String }) id: string) {
    return this.productsService.remove(id);
  }
}
