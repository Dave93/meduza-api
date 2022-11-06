import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutProduct_created_byTousersInput } from '../users/users-create-nested-one-without-product-created-by-tousers.input';
import { usersCreateNestedOneWithoutProduct_updated_byTousersInput } from '../users/users-create-nested-one-without-product-updated-by-tousers.input';

@InputType()
export class productCreateWithoutProducts_product_categoriesInput {

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
}
