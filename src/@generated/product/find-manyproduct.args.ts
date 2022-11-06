import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { productOrderByWithRelationInput } from './product-order-by-with-relation.input';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductScalarFieldEnum } from '../prisma/product-scalar-field.enum';

@ArgsType()
export class FindManyproductArgs {

    @Field(() => productWhereInput, {nullable:true})
    @Type(() => productWhereInput)
    where?: productWhereInput;

    @Field(() => [productOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<productOrderByWithRelationInput>;

    @Field(() => productWhereUniqueInput, {nullable:true})
    cursor?: productWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}
