import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateWithoutProduct_created_byTousersInput } from './product-create-without-product-created-by-tousers.input';
import { Type } from 'class-transformer';
import { productCreateOrConnectWithoutProduct_created_byTousersInput } from './product-create-or-connect-without-product-created-by-tousers.input';
import { productCreateManyProduct_created_byTousersInputEnvelope } from './product-create-many-product-created-by-tousers-input-envelope.input';
import { productWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class productUncheckedCreateNestedManyWithoutProduct_created_byTousersInput {

    @Field(() => [productCreateWithoutProduct_created_byTousersInput], {nullable:true})
    @Type(() => productCreateWithoutProduct_created_byTousersInput)
    create?: Array<productCreateWithoutProduct_created_byTousersInput>;

    @Field(() => [productCreateOrConnectWithoutProduct_created_byTousersInput], {nullable:true})
    @Type(() => productCreateOrConnectWithoutProduct_created_byTousersInput)
    connectOrCreate?: Array<productCreateOrConnectWithoutProduct_created_byTousersInput>;

    @Field(() => productCreateManyProduct_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => productCreateManyProduct_created_byTousersInputEnvelope)
    createMany?: productCreateManyProduct_created_byTousersInputEnvelope;

    @Field(() => [productWhereUniqueInput], {nullable:true})
    @Type(() => productWhereUniqueInput)
    connect?: Array<productWhereUniqueInput>;
}
