import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateWithoutProducts_product_categoriesInput } from './product-categories-create-without-products-product-categories.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput } from './product-categories-create-or-connect-without-products-product-categories.input';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';

@InputType()
export class product_categoriesCreateNestedOneWithoutProducts_product_categoriesInput {

    @Field(() => product_categoriesCreateWithoutProducts_product_categoriesInput, {nullable:true})
    @Type(() => product_categoriesCreateWithoutProducts_product_categoriesInput)
    create?: product_categoriesCreateWithoutProducts_product_categoriesInput;

    @Field(() => product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput, {nullable:true})
    @Type(() => product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput)
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput;

    @Field(() => product_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    connect?: product_categoriesWhereUniqueInput;
}
