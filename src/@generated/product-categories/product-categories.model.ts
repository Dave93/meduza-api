import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { product } from '../product/product.model';
import { Product_categoriesCount } from '../prisma/product-categories-count.output';

@ObjectType()
export class product_categories {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sort!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_additional!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    product_categories_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    product_categories_updated_byTousers?: users | null;

    @Field(() => [product], {nullable:true})
    products_product_categories?: Array<product>;

    @Field(() => Product_categoriesCount, {nullable:false})
    _count?: Product_categoriesCount;
}
