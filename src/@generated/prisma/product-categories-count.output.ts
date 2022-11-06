import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Product_categoriesCount {

    @Field(() => Int, {nullable:false})
    products_product_categories!: number;
}
