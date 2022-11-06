import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { productOrderByWithAggregationInput } from './product-order-by-with-aggregation.input';
import { ProductScalarFieldEnum } from '../prisma/product-scalar-field.enum';
import { productScalarWhereWithAggregatesInput } from './product-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class productGroupByArgs {

    @Field(() => productWhereInput, {nullable:true})
    @Type(() => productWhereInput)
    where?: productWhereInput;

    @Field(() => [productOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<productOrderByWithAggregationInput>;

    @Field(() => [ProductScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductScalarFieldEnum>;

    @Field(() => productScalarWhereWithAggregatesInput, {nullable:true})
    having?: productScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
