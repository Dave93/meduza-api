import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesScalarWhereInput } from './product-categories-scalar-where.input';
import { Type } from 'class-transformer';
import { product_categoriesUpdateManyMutationInput } from './product-categories-update-many-mutation.input';

@InputType()
export class product_categoriesUpdateManyWithWhereWithoutProduct_categories_created_byTousersInput {

    @Field(() => product_categoriesScalarWhereInput, {nullable:false})
    @Type(() => product_categoriesScalarWhereInput)
    where!: product_categoriesScalarWhereInput;

    @Field(() => product_categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => product_categoriesUpdateManyMutationInput)
    data!: product_categoriesUpdateManyMutationInput;
}
