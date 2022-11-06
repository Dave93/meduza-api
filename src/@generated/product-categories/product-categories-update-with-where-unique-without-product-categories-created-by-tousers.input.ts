import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { Type } from 'class-transformer';
import { product_categoriesUpdateWithoutProduct_categories_created_byTousersInput } from './product-categories-update-without-product-categories-created-by-tousers.input';

@InputType()
export class product_categoriesUpdateWithWhereUniqueWithoutProduct_categories_created_byTousersInput {

    @Field(() => product_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => product_categoriesWhereUniqueInput)
    where!: product_categoriesWhereUniqueInput;

    @Field(() => product_categoriesUpdateWithoutProduct_categories_created_byTousersInput, {nullable:false})
    @Type(() => product_categoriesUpdateWithoutProduct_categories_created_byTousersInput)
    data!: product_categoriesUpdateWithoutProduct_categories_created_byTousersInput;
}
