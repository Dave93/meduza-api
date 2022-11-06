import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { productUpdateWithoutProduct_updated_byTousersInput } from './product-update-without-product-updated-by-tousers.input';

@InputType()
export class productUpdateWithWhereUniqueWithoutProduct_updated_byTousersInput {

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;

    @Field(() => productUpdateWithoutProduct_updated_byTousersInput, {nullable:false})
    @Type(() => productUpdateWithoutProduct_updated_byTousersInput)
    data!: productUpdateWithoutProduct_updated_byTousersInput;
}
