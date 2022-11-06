import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { productUpdateWithoutProduct_created_byTousersInput } from './product-update-without-product-created-by-tousers.input';

@InputType()
export class productUpdateWithWhereUniqueWithoutProduct_created_byTousersInput {

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;

    @Field(() => productUpdateWithoutProduct_created_byTousersInput, {nullable:false})
    @Type(() => productUpdateWithoutProduct_created_byTousersInput)
    data!: productUpdateWithoutProduct_created_byTousersInput;
}
