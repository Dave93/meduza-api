import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutProduct_categories_created_byTousersInput } from '../users/users-create-nested-one-without-product-categories-created-by-tousers.input';
import { productCreateNestedManyWithoutProducts_product_categoriesInput } from '../product/product-create-nested-many-without-products-product-categories.input';

@InputType()
export class product_categoriesCreateWithoutProduct_categories_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_additional?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutProduct_categories_created_byTousersInput, {nullable:true})
    product_categories_created_byTousers?: usersCreateNestedOneWithoutProduct_categories_created_byTousersInput;

    @Field(() => productCreateNestedManyWithoutProducts_product_categoriesInput, {nullable:true})
    products_product_categories?: productCreateNestedManyWithoutProducts_product_categoriesInput;
}
