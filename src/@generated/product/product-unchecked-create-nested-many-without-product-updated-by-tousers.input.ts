import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateWithoutProduct_updated_byTousersInput } from './product-create-without-product-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { productCreateOrConnectWithoutProduct_updated_byTousersInput } from './product-create-or-connect-without-product-updated-by-tousers.input';
import { productCreateManyProduct_updated_byTousersInputEnvelope } from './product-create-many-product-updated-by-tousers-input-envelope.input';
import { productWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class productUncheckedCreateNestedManyWithoutProduct_updated_byTousersInput {

    @Field(() => [productCreateWithoutProduct_updated_byTousersInput], {nullable:true})
    @Type(() => productCreateWithoutProduct_updated_byTousersInput)
    create?: Array<productCreateWithoutProduct_updated_byTousersInput>;

    @Field(() => [productCreateOrConnectWithoutProduct_updated_byTousersInput], {nullable:true})
    @Type(() => productCreateOrConnectWithoutProduct_updated_byTousersInput)
    connectOrCreate?: Array<productCreateOrConnectWithoutProduct_updated_byTousersInput>;

    @Field(() => productCreateManyProduct_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => productCreateManyProduct_updated_byTousersInputEnvelope)
    createMany?: productCreateManyProduct_updated_byTousersInputEnvelope;

    @Field(() => [productWhereUniqueInput], {nullable:true})
    @Type(() => productWhereUniqueInput)
    connect?: Array<productWhereUniqueInput>;
}
