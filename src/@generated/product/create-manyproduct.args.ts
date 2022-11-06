import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productCreateManyInput } from './product-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyproductArgs {

    @Field(() => [productCreateManyInput], {nullable:false})
    @Type(() => productCreateManyInput)
    data!: Array<productCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
