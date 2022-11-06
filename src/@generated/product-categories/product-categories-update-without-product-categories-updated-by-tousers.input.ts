import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersUpdateOneWithoutProduct_categories_created_byTousersNestedInput } from '../users/users-update-one-without-product-categories-created-by-tousers-nested.input';
import { productUpdateManyWithoutProducts_product_categoriesNestedInput } from '../product/product-update-many-without-products-product-categories-nested.input';

@InputType()
export class product_categoriesUpdateWithoutProduct_categories_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

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

    @Field(() => usersUpdateOneWithoutProduct_categories_created_byTousersNestedInput, {nullable:true})
    product_categories_created_byTousers?: usersUpdateOneWithoutProduct_categories_created_byTousersNestedInput;

    @Field(() => productUpdateManyWithoutProducts_product_categoriesNestedInput, {nullable:true})
    products_product_categories?: productUpdateManyWithoutProducts_product_categoriesNestedInput;
}
