import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { productCreateArgs } from '../../helpers/create-one.args';
import { productWhereInput } from '../../@generated/product/product-where.input';
import { FindManyproductArgs } from '../../@generated/product/find-manyproduct.args';
import { UpdateOneproductArgs } from '../../@generated/product/update-oneproduct.args';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  create(createProductInput: productCreateArgs) {
    return this.prismaService.product.create(createProductInput);
  }

  findAll(params: FindManyproductArgs) {
    return this.prismaService.product.findMany(params);
  }

  findOne(id: string) {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(updateProductInput: UpdateOneproductArgs) {
    return this.prismaService.product.update(updateProductInput);
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }

  orderStatusConnection(where: productWhereInput) {
    return this.prismaService.product.aggregate({
      where,
      _count: {
        id: true,
      },
    });
  }
}
