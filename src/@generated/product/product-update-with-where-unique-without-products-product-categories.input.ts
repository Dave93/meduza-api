import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { productUpdateWithoutProducts_product_categoriesInput } from './product-update-without-products-product-categories.input';

@InputType()
export class productUpdateWithWhereUniqueWithoutProducts_product_categoriesInput {

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;

    @Field(() => productUpdateWithoutProducts_product_categoriesInput, {nullable:false})
    @Type(() => productUpdateWithoutProducts_product_categoriesInput)
    data!: productUpdateWithoutProducts_product_categoriesInput;
}
