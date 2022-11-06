import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productWhereInput } from './product-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyproductArgs {

    @Field(() => productWhereInput, {nullable:true})
    @Type(() => productWhereInput)
    where?: productWhereInput;
}
