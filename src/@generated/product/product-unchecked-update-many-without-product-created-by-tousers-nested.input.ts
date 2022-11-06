import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateWithoutProduct_created_byTousersInput } from './product-create-without-product-created-by-tousers.input';
import { Type } from 'class-transformer';
import { productCreateOrConnectWithoutProduct_created_byTousersInput } from './product-create-or-connect-without-product-created-by-tousers.input';
import { productUpsertWithWhereUniqueWithoutProduct_created_byTousersInput } from './product-upsert-with-where-unique-without-product-created-by-tousers.input';
import { productCreateManyProduct_created_byTousersInputEnvelope } from './product-create-many-product-created-by-tousers-input-envelope.input';
import { productWhereUniqueInput } from './product-where-unique.input';
import { productUpdateWithWhereUniqueWithoutProduct_created_byTousersInput } from './product-update-with-where-unique-without-product-created-by-tousers.input';
import { productUpdateManyWithWhereWithoutProduct_created_byTousersInput } from './product-update-many-with-where-without-product-created-by-tousers.input';
import { productScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class productUncheckedUpdateManyWithoutProduct_created_byTousersNestedInput {

    @Field(() => [productCreateWithoutProduct_created_byTousersInput], {nullable:true})
    @Type(() => productCreateWithoutProduct_created_byTousersInput)
    create?: Array<productCreateWithoutProduct_created_byTousersInput>;

    @Field(() => [productCreateOrConnectWithoutProduct_created_byTousersInput], {nullable:true})
    @Type(() => productCreateOrConnectWithoutProduct_created_byTousersInput)
    connectOrCreate?: Array<productCreateOrConnectWithoutProduct_created_byTousersInput>;

    @Field(() => [productUpsertWithWhereUniqueWithoutProduct_created_byTousersInput], {nullable:true})
    @Type(() => productUpsertWithWhereUniqueWithoutProduct_created_byTousersInput)
    upsert?: Array<productUpsertWithWhereUniqueWithoutProduct_created_byTousersInput>;

    @Field(() => productCreateManyProduct_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => productCreateManyProduct_created_byTousersInputEnvelope)
    createMany?: productCreateManyProduct_created_byTousersInputEnvelope;

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

    @Field(() => [productUpdateWithWhereUniqueWithoutProduct_created_byTousersInput], {nullable:true})
    @Type(() => productUpdateWithWhereUniqueWithoutProduct_created_byTousersInput)
    update?: Array<productUpdateWithWhereUniqueWithoutProduct_created_byTousersInput>;

    @Field(() => [productUpdateManyWithWhereWithoutProduct_created_byTousersInput], {nullable:true})
    @Type(() => productUpdateManyWithWhereWithoutProduct_created_byTousersInput)
    updateMany?: Array<productUpdateManyWithWhereWithoutProduct_created_byTousersInput>;

    @Field(() => [productScalarWhereInput], {nullable:true})
    @Type(() => productScalarWhereInput)
    deleteMany?: Array<productScalarWhereInput>;
}
