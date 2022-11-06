import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { productUpdateWithoutProducts_product_categoriesInput } from './product-update-without-products-product-categories.input';
import { productCreateWithoutProducts_product_categoriesInput } from './product-create-without-products-product-categories.input';

@InputType()
export class productUpsertWithWhereUniqueWithoutProducts_product_categoriesInput {

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;

    @Field(() => productUpdateWithoutProducts_product_categoriesInput, {nullable:false})
    @Type(() => productUpdateWithoutProducts_product_categoriesInput)
    update!: productUpdateWithoutProducts_product_categoriesInput;

    @Field(() => productCreateWithoutProducts_product_categoriesInput, {nullable:false})
    @Type(() => productCreateWithoutProducts_product_categoriesInput)
    create!: productCreateWithoutProducts_product_categoriesInput;
}
