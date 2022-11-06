import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { productCreateWithoutProduct_created_byTousersInput } from './product-create-without-product-created-by-tousers.input';

@InputType()
export class productCreateOrConnectWithoutProduct_created_byTousersInput {

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;

    @Field(() => productCreateWithoutProduct_created_byTousersInput, {nullable:false})
    @Type(() => productCreateWithoutProduct_created_byTousersInput)
    create!: productCreateWithoutProduct_created_byTousersInput;
}
