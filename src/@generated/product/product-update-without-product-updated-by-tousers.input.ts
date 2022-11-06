import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersUpdateOneWithoutProduct_created_byTousersNestedInput } from '../users/users-update-one-without-product-created-by-tousers-nested.input';
import { product_categoriesUpdateOneRequiredWithoutProducts_product_categoriesNestedInput } from '../product-categories/product-categories-update-one-required-without-products-product-categories-nested.input';

@InputType()
export class productUpdateWithoutProduct_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

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

    @Field(() => usersUpdateOneWithoutProduct_created_byTousersNestedInput, {nullable:true})
    product_created_byTousers?: usersUpdateOneWithoutProduct_created_byTousersNestedInput;

    @Field(() => product_categoriesUpdateOneRequiredWithoutProducts_product_categoriesNestedInput, {nullable:true})
    products_product_categories?: product_categoriesUpdateOneRequiredWithoutProducts_product_categoriesNestedInput;
}
