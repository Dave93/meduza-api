import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productUpdateManyMutationInput } from './product-update-many-mutation.input';
import { Type } from 'class-transformer';
import { productWhereInput } from './product-where.input';

@ArgsType()
export class UpdateManyproductArgs {

    @Field(() => productUpdateManyMutationInput, {nullable:false})
    @Type(() => productUpdateManyMutationInput)
    data!: productUpdateManyMutationInput;

    @Field(() => productWhereInput, {nullable:true})
    @Type(() => productWhereInput)
    where?: productWhereInput;
}
