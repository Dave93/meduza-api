import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateManyProducts_product_categoriesInput } from './product-create-many-products-product-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class productCreateManyProducts_product_categoriesInputEnvelope {

    @Field(() => [productCreateManyProducts_product_categoriesInput], {nullable:false})
    @Type(() => productCreateManyProducts_product_categoriesInput)
    data!: Array<productCreateManyProducts_product_categoriesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
