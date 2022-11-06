import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutProduct_created_byTousersInput } from '../users/users-create-nested-one-without-product-created-by-tousers.input';
import { usersCreateNestedOneWithoutProduct_updated_byTousersInput } from '../users/users-create-nested-one-without-product-updated-by-tousers.input';
import { product_categoriesCreateNestedOneWithoutProducts_product_categoriesInput } from '../product-categories/product-categories-create-nested-one-without-products-product-categories.input';

@InputType()
export class productCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutProduct_created_byTousersInput, {nullable:true})
    product_created_byTousers?: usersCreateNestedOneWithoutProduct_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutProduct_updated_byTousersInput, {nullable:true})
    product_updated_byTousers?: usersCreateNestedOneWithoutProduct_updated_byTousersInput;

    @Field(() => product_categoriesCreateNestedOneWithoutProducts_product_categoriesInput, {nullable:false})
    products_product_categories!: product_categoriesCreateNestedOneWithoutProducts_product_categoriesInput;
}
