import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueproductArgs {

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;
}
