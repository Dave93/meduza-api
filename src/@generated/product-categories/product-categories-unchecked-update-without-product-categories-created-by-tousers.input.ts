import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { productUncheckedUpdateManyWithoutProducts_product_categoriesNestedInput } from '../product/product-unchecked-update-many-without-products-product-categories-nested.input';

@InputType()
export class product_categoriesUncheckedUpdateWithoutProduct_categories_created_byTousersInput {

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

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => productUncheckedUpdateManyWithoutProducts_product_categoriesNestedInput, {nullable:true})
    products_product_categories?: productUncheckedUpdateManyWithoutProducts_product_categoriesNestedInput;
}
