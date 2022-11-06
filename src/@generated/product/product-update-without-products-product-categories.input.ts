import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersUpdateOneWithoutProduct_created_byTousersNestedInput } from '../users/users-update-one-without-product-created-by-tousers-nested.input';
import { usersUpdateOneWithoutProduct_updated_byTousersNestedInput } from '../users/users-update-one-without-product-updated-by-tousers-nested.input';

@InputType()
export class productUpdateWithoutProducts_product_categoriesInput {

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

    @Field(() => usersUpdateOneWithoutProduct_updated_byTousersNestedInput, {nullable:true})
    product_updated_byTousers?: usersUpdateOneWithoutProduct_updated_byTousersNestedInput;
}
