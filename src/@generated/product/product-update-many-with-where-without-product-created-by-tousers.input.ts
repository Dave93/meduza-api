import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productScalarWhereInput } from './product-scalar-where.input';
import { Type } from 'class-transformer';
import { productUpdateManyMutationInput } from './product-update-many-mutation.input';

@InputType()
export class productUpdateManyWithWhereWithoutProduct_created_byTousersInput {

    @Field(() => productScalarWhereInput, {nullable:false})
    @Type(() => productScalarWhereInput)
    where!: productScalarWhereInput;

    @Field(() => productUpdateManyMutationInput, {nullable:false})
    @Type(() => productUpdateManyMutationInput)
    data!: productUpdateManyMutationInput;
}
