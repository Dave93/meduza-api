import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { product_categoriesUpdateManyMutationInput } from '../product-categories/product-categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { product_categoriesWhereInput } from '../product-categories/product-categories-where.input';

@ArgsType()
export class UpdateManyproductCategoriesArgs {

    @Field(() => product_categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => product_categoriesUpdateManyMutationInput)
    data!: product_categoriesUpdateManyMutationInput;

    @Field(() => product_categoriesWhereInput, {nullable:true})
    @Type(() => product_categoriesWhereInput)
    where?: product_categoriesWhereInput;
}
