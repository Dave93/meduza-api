import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productCreateInput } from './product-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneproductArgs {

    @Field(() => productCreateInput, {nullable:false})
    @Type(() => productCreateInput)
    data!: productCreateInput;
}
