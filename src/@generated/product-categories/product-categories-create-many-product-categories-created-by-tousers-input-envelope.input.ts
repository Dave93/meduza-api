import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateManyProduct_categories_created_byTousersInput } from './product-categories-create-many-product-categories-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesCreateManyProduct_categories_created_byTousersInputEnvelope {

    @Field(() => [product_categoriesCreateManyProduct_categories_created_byTousersInput], {nullable:false})
    @Type(() => product_categoriesCreateManyProduct_categories_created_byTousersInput)
    data!: Array<product_categoriesCreateManyProduct_categories_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
