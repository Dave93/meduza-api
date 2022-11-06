import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateWithoutProducts_product_categoriesInput } from './product-categories-create-without-products-product-categories.input';

@InputType()
export class product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: product_categoriesWhereUniqueInput;

    @Field(() => product_categoriesCreateWithoutProducts_product_categoriesInput, {nullable:false})
    @Type(() => product_categoriesCreateWithoutProducts_product_categoriesInput)
    create!: product_categoriesCreateWithoutProducts_product_categoriesInput;
}
