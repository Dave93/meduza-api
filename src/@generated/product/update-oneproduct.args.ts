import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productUpdateInput } from './product-update.input';
import { Type } from 'class-transformer';
import { productWhereUniqueInput } from './product-where-unique.input';

@ArgsType()
export class UpdateOneproductArgs {

    @Field(() => productUpdateInput, {nullable:false})
    @Type(() => productUpdateInput)
    data!: productUpdateInput;

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;
}
