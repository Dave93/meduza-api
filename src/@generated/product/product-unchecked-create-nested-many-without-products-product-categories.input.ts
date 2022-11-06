import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateWithoutProducts_product_categoriesInput } from './product-create-without-products-product-categories.input';
import { Type } from 'class-transformer';
import { productCreateOrConnectWithoutProducts_product_categoriesInput } from './product-create-or-connect-without-products-product-categories.input';
import { productCreateManyProducts_product_categoriesInputEnvelope } from './product-create-many-products-product-categories-input-envelope.input';
import { productWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class productUncheckedCreateNestedManyWithoutProducts_product_categoriesInput {

    @Field(() => [productCreateWithoutProducts_product_categoriesInput], {nullable:true})
    @Type(() => productCreateWithoutProducts_product_categoriesInput)
    create?: Array<productCreateWithoutProducts_product_categoriesInput>;

    @Field(() => [productCreateOrConnectWithoutProducts_product_categoriesInput], {nullable:true})
    @Type(() => productCreateOrConnectWithoutProducts_product_categoriesInput)
    connectOrCreate?: Array<productCreateOrConnectWithoutProducts_product_categoriesInput>;

    @Field(() => productCreateManyProducts_product_categoriesInputEnvelope, {nullable:true})
    @Type(() => productCreateManyProducts_product_categoriesInputEnvelope)
    createMany?: productCreateManyProducts_product_categoriesInputEnvelope;

    @Field(() => [productWhereUniqueInput], {nullable:true})
    @Type(() => productWhereUniqueInput)
    connect?: Array<productWhereUniqueInput>;
}
