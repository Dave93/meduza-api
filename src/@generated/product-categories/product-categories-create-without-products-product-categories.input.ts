import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutProduct_categories_created_byTousersInput } from '../users/users-create-nested-one-without-product-categories-created-by-tousers.input';
import { usersCreateNestedOneWithoutProduct_categories_updated_byTousersInput } from '../users/users-create-nested-one-without-product-categories-updated-by-tousers.input';

@InputType()
export class product_categoriesCreateWithoutProducts_product_categoriesInput {

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

    @Field(() => usersCreateNestedOneWithoutProduct_categories_updated_byTousersInput, {nullable:true})
    product_categories_updated_byTousers?: usersCreateNestedOneWithoutProduct_categories_updated_byTousersInput;
}
