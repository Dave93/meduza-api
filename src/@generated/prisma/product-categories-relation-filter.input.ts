import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesWhereInput } from '../product-categories/product-categories-where.input';

@InputType()
export class Product_categoriesRelationFilter {

    @Field(() => product_categoriesWhereInput, {nullable:true})
    is?: product_categoriesWhereInput;

    @Field(() => product_categoriesWhereInput, {nullable:true})
    isNot?: product_categoriesWhereInput;
}
