import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateWithoutProduct_categories_updated_byTousersInput } from './product-categories-create-without-product-categories-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateOrConnectWithoutProduct_categories_updated_byTousersInput } from './product-categories-create-or-connect-without-product-categories-updated-by-tousers.input';
import { product_categoriesCreateManyProduct_categories_updated_byTousersInputEnvelope } from './product-categories-create-many-product-categories-updated-by-tousers-input-envelope.input';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';

@InputType()
export class product_categoriesCreateNestedManyWithoutProduct_categories_updated_byTousersInput {

    @Field(() => [product_categoriesCreateWithoutProduct_categories_updated_byTousersInput], {nullable:true})
    @Type(() => product_categoriesCreateWithoutProduct_categories_updated_byTousersInput)
    create?: Array<product_categoriesCreateWithoutProduct_categories_updated_byTousersInput>;

    @Field(() => [product_categoriesCreateOrConnectWithoutProduct_categories_updated_byTousersInput], {nullable:true})
    @Type(() => product_categoriesCreateOrConnectWithoutProduct_categories_updated_byTousersInput)
    connectOrCreate?: Array<product_categoriesCreateOrConnectWithoutProduct_categories_updated_byTousersInput>;

    @Field(() => product_categoriesCreateManyProduct_categories_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => product_categoriesCreateManyProduct_categories_updated_byTousersInputEnvelope)
    createMany?: product_categoriesCreateManyProduct_categories_updated_byTousersInputEnvelope;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    connect?: Array<product_categoriesWhereUniqueInput>;
}
