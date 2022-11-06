import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateWithoutProducts_product_categoriesInput } from './product-create-without-products-product-categories.input';
import { Type } from 'class-transformer';
import { productCreateOrConnectWithoutProducts_product_categoriesInput } from './product-create-or-connect-without-products-product-categories.input';
import { productUpsertWithWhereUniqueWithoutProducts_product_categoriesInput } from './product-upsert-with-where-unique-without-products-product-categories.input';
import { productCreateManyProducts_product_categoriesInputEnvelope } from './product-create-many-products-product-categories-input-envelope.input';
import { productWhereUniqueInput } from './product-where-unique.input';
import { productUpdateWithWhereUniqueWithoutProducts_product_categoriesInput } from './product-update-with-where-unique-without-products-product-categories.input';
import { productUpdateManyWithWhereWithoutProducts_product_categoriesInput } from './product-update-many-with-where-without-products-product-categories.input';
import { productScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class productUpdateManyWithoutProducts_product_categoriesNestedInput {

    @Field(() => [productCreateWithoutProducts_product_categoriesInput], {nullable:true})
    @Type(() => productCreateWithoutProducts_product_categoriesInput)
    create?: Array<productCreateWithoutProducts_product_categoriesInput>;

    @Field(() => [productCreateOrConnectWithoutProducts_product_categoriesInput], {nullable:true})
    @Type(() => productCreateOrConnectWithoutProducts_product_categoriesInput)
    connectOrCreate?: Array<productCreateOrConnectWithoutProducts_product_categoriesInput>;

    @Field(() => [productUpsertWithWhereUniqueWithoutProducts_product_categoriesInput], {nullable:true})
    @Type(() => productUpsertWithWhereUniqueWithoutProducts_product_categoriesInput)
    upsert?: Array<productUpsertWithWhereUniqueWithoutProducts_product_categoriesInput>;

    @Field(() => productCreateManyProducts_product_categoriesInputEnvelope, {nullable:true})
    @Type(() => productCreateManyProducts_product_categoriesInputEnvelope)
    createMany?: productCreateManyProducts_product_categoriesInputEnvelope;

    @Field(() => [productWhereUniqueInput], {nullable:true})
    @Type(() => productWhereUniqueInput)
    set?: Array<productWhereUniqueInput>;

    @Field(() => [productWhereUniqueInput], {nullable:true})
    @Type(() => productWhereUniqueInput)
    disconnect?: Array<productWhereUniqueInput>;

    @Field(() => [productWhereUniqueInput], {nullable:true})
    @Type(() => productWhereUniqueInput)
    delete?: Array<productWhereUniqueInput>;

    @Field(() => [productWhereUniqueInput], {nullable:true})
    @Type(() => productWhereUniqueInput)
    connect?: Array<productWhereUniqueInput>;

    @Field(() => [productUpdateWithWhereUniqueWithoutProducts_product_categoriesInput], {nullable:true})
    @Type(() => productUpdateWithWhereUniqueWithoutProducts_product_categoriesInput)
    update?: Array<productUpdateWithWhereUniqueWithoutProducts_product_categoriesInput>;

    @Field(() => [productUpdateManyWithWhereWithoutProducts_product_categoriesInput], {nullable:true})
    @Type(() => productUpdateManyWithWhereWithoutProducts_product_categoriesInput)
    updateMany?: Array<productUpdateManyWithWhereWithoutProducts_product_categoriesInput>;

    @Field(() => [productScalarWhereInput], {nullable:true})
    @Type(() => productScalarWhereInput)
    deleteMany?: Array<productScalarWhereInput>;
}
