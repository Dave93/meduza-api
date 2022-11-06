import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { productCreateWithoutProduct_updated_byTousersInput } from './product-create-without-product-updated-by-tousers.input';

@InputType()
export class productCreateOrConnectWithoutProduct_updated_byTousersInput {

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;

    @Field(() => productCreateWithoutProduct_updated_byTousersInput, {nullable:false})
    @Type(() => productCreateWithoutProduct_updated_byTousersInput)
    create!: productCreateWithoutProduct_updated_byTousersInput;
}
