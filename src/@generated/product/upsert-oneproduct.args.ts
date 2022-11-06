import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { productCreateInput } from './product-create.input';
import { productUpdateInput } from './product-update.input';

@ArgsType()
export class UpsertOneproductArgs {

    @Field(() => productWhereUniqueInput, {nullable:false})
    @Type(() => productWhereUniqueInput)
    where!: productWhereUniqueInput;

    @Field(() => productCreateInput, {nullable:false})
    @Type(() => productCreateInput)
    create!: productCreateInput;

    @Field(() => productUpdateInput, {nullable:false})
    @Type(() => productUpdateInput)
    update!: productUpdateInput;
}
