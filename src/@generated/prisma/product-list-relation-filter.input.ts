import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productWhereInput } from '../product/product-where.input';

@InputType()
export class ProductListRelationFilter {

    @Field(() => productWhereInput, {nullable:true})
    every?: productWhereInput;

    @Field(() => productWhereInput, {nullable:true})
    some?: productWhereInput;

    @Field(() => productWhereInput, {nullable:true})
    none?: productWhereInput;
}
