import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesUpdateWithoutProducts_product_categoriesInput } from './product-categories-update-without-products-product-categories.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateWithoutProducts_product_categoriesInput } from './product-categories-create-without-products-product-categories.input';

@InputType()
export class product_categoriesUpsertWithoutProducts_product_categoriesInput {

    @Field(() => product_categoriesUpdateWithoutProducts_product_categoriesInput, {nullable:false})
    @Type(() => product_categoriesUpdateWithoutProducts_product_categoriesInput)
    update!: product_categoriesUpdateWithoutProducts_product_categoriesInput;

    @Field(() => product_categoriesCreateWithoutProducts_product_categoriesInput, {nullable:false})
    @Type(() => product_categoriesCreateWithoutProducts_product_categoriesInput)
    create!: product_categoriesCreateWithoutProducts_product_categoriesInput;
}
