import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateWithoutProducts_product_categoriesInput } from './product-categories-create-without-products-product-categories.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput } from './product-categories-create-or-connect-without-products-product-categories.input';
import { product_categoriesUpsertWithoutProducts_product_categoriesInput } from './product-categories-upsert-without-products-product-categories.input';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { product_categoriesUpdateWithoutProducts_product_categoriesInput } from './product-categories-update-without-products-product-categories.input';

@InputType()
export class product_categoriesUpdateOneRequiredWithoutProducts_product_categoriesNestedInput {

    @Field(() => product_categoriesCreateWithoutProducts_product_categoriesInput, {nullable:true})
    @Type(() => product_categoriesCreateWithoutProducts_product_categoriesInput)
    create?: product_categoriesCreateWithoutProducts_product_categoriesInput;

    @Field(() => product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput, {nullable:true})
    @Type(() => product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput)
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProducts_product_categoriesInput;

    @Field(() => product_categoriesUpsertWithoutProducts_product_categoriesInput, {nullable:true})
    @Type(() => product_categoriesUpsertWithoutProducts_product_categoriesInput)
    upsert?: product_categoriesUpsertWithoutProducts_product_categoriesInput;

    @Field(() => product_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    connect?: product_categoriesWhereUniqueInput;

    @Field(() => product_categoriesUpdateWithoutProducts_product_categoriesInput, {nullable:true})
    @Type(() => product_categoriesUpdateWithoutProducts_product_categoriesInput)
    update?: product_categoriesUpdateWithoutProducts_product_categoriesInput;
}
