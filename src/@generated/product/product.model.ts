import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { product_categories } from '../product-categories/product-categories.model';

@ObjectType()
export class product {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    price!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sort!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => String, {nullable:false})
    product_category_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    product_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    product_updated_byTousers?: users | null;

    @Field(() => product_categories, {nullable:false})
    products_product_categories?: product_categories;
}
