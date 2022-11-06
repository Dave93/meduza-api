import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { productUncheckedCreateNestedManyWithoutProducts_product_categoriesInput } from '../product/product-unchecked-create-nested-many-without-products-product-categories.input';

@InputType()
export class product_categoriesUncheckedCreateInput {

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

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => productUncheckedCreateNestedManyWithoutProducts_product_categoriesInput, {nullable:true})
    products_product_categories?: productUncheckedCreateNestedManyWithoutProducts_product_categoriesInput;
}
