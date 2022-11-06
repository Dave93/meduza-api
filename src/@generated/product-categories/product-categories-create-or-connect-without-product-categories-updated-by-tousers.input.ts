import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateWithoutProduct_categories_updated_byTousersInput } from './product-categories-create-without-product-categories-updated-by-tousers.input';

@InputType()
export class product_categoriesCreateOrConnectWithoutProduct_categories_updated_byTousersInput {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: product_categoriesWhereUniqueInput;

    @Field(() => product_categoriesCreateWithoutProduct_categories_updated_byTousersInput, {nullable:false})
    @Type(() => product_categoriesCreateWithoutProduct_categories_updated_byTousersInput)
    create!: product_categoriesCreateWithoutProduct_categories_updated_byTousersInput;
}
