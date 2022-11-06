import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersUpdateOneWithoutProduct_categories_created_byTousersNestedInput } from '../users/users-update-one-without-product-categories-created-by-tousers-nested.input';
import { usersUpdateOneWithoutProduct_categories_updated_byTousersNestedInput } from '../users/users-update-one-without-product-categories-updated-by-tousers-nested.input';

@InputType()
export class product_categoriesUpdateWithoutProducts_product_categoriesInput {

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

    @Field(() => usersUpdateOneWithoutProduct_categories_updated_byTousersNestedInput, {nullable:true})
    product_categories_updated_byTousers?: usersUpdateOneWithoutProduct_categories_updated_byTousersNestedInput;
}
