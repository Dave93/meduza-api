import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateWithoutProduct_updated_byTousersInput } from './product-create-without-product-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { productCreateOrConnectWithoutProduct_updated_byTousersInput } from './product-create-or-connect-without-product-updated-by-tousers.input';
import { productUpsertWithWhereUniqueWithoutProduct_updated_byTousersInput } from './product-upsert-with-where-unique-without-product-updated-by-tousers.input';
import { productCreateManyProduct_updated_byTousersInputEnvelope } from './product-create-many-product-updated-by-tousers-input-envelope.input';
import { productWhereUniqueInput } from './product-where-unique.input';
import { productUpdateWithWhereUniqueWithoutProduct_updated_byTousersInput } from './product-update-with-where-unique-without-product-updated-by-tousers.input';
import { productUpdateManyWithWhereWithoutProduct_updated_byTousersInput } from './product-update-many-with-where-without-product-updated-by-tousers.input';
import { productScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class productUpdateManyWithoutProduct_updated_byTousersNestedInput {

    @Field(() => [productCreateWithoutProduct_updated_byTousersInput], {nullable:true})
    @Type(() => productCreateWithoutProduct_updated_byTousersInput)
    create?: Array<productCreateWithoutProduct_updated_byTousersInput>;

    @Field(() => [productCreateOrConnectWithoutProduct_updated_byTousersInput], {nullable:true})
    @Type(() => productCreateOrConnectWithoutProduct_updated_byTousersInput)
    connectOrCreate?: Array<productCreateOrConnectWithoutProduct_updated_byTousersInput>;

    @Field(() => [productUpsertWithWhereUniqueWithoutProduct_updated_byTousersInput], {nullable:true})
    @Type(() => productUpsertWithWhereUniqueWithoutProduct_updated_byTousersInput)
    upsert?: Array<productUpsertWithWhereUniqueWithoutProduct_updated_byTousersInput>;

    @Field(() => productCreateManyProduct_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => productCreateManyProduct_updated_byTousersInputEnvelope)
    createMany?: productCreateManyProduct_updated_byTousersInputEnvelope;

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

    @Field(() => [productUpdateWithWhereUniqueWithoutProduct_updated_byTousersInput], {nullable:true})
    @Type(() => productUpdateWithWhereUniqueWithoutProduct_updated_byTousersInput)
    update?: Array<productUpdateWithWhereUniqueWithoutProduct_updated_byTousersInput>;

    @Field(() => [productUpdateManyWithWhereWithoutProduct_updated_byTousersInput], {nullable:true})
    @Type(() => productUpdateManyWithWhereWithoutProduct_updated_byTousersInput)
    updateMany?: Array<productUpdateManyWithWhereWithoutProduct_updated_byTousersInput>;

    @Field(() => [productScalarWhereInput], {nullable:true})
    @Type(() => productScalarWhereInput)
    deleteMany?: Array<productScalarWhereInput>;
}
