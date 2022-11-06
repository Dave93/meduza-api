import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateWithoutProduct_categories_created_byTousersInput } from './product-categories-create-without-product-categories-created-by-tousers.input';
import { Type } from 'class-transformer';
import { product_categoriesCreateOrConnectWithoutProduct_categories_created_byTousersInput } from './product-categories-create-or-connect-without-product-categories-created-by-tousers.input';
import { product_categoriesUpsertWithWhereUniqueWithoutProduct_categories_created_byTousersInput } from './product-categories-upsert-with-where-unique-without-product-categories-created-by-tousers.input';
import { product_categoriesCreateManyProduct_categories_created_byTousersInputEnvelope } from './product-categories-create-many-product-categories-created-by-tousers-input-envelope.input';
import { product_categoriesWhereUniqueInput } from './product-categories-where-unique.input';
import { product_categoriesUpdateWithWhereUniqueWithoutProduct_categories_created_byTousersInput } from './product-categories-update-with-where-unique-without-product-categories-created-by-tousers.input';
import { product_categoriesUpdateManyWithWhereWithoutProduct_categories_created_byTousersInput } from './product-categories-update-many-with-where-without-product-categories-created-by-tousers.input';
import { product_categoriesScalarWhereInput } from './product-categories-scalar-where.input';

@InputType()
export class product_categoriesUncheckedUpdateManyWithoutProduct_categories_created_byTousersNestedInput {

    @Field(() => [product_categoriesCreateWithoutProduct_categories_created_byTousersInput], {nullable:true})
    @Type(() => product_categoriesCreateWithoutProduct_categories_created_byTousersInput)
    create?: Array<product_categoriesCreateWithoutProduct_categories_created_byTousersInput>;

    @Field(() => [product_categoriesCreateOrConnectWithoutProduct_categories_created_byTousersInput], {nullable:true})
    @Type(() => product_categoriesCreateOrConnectWithoutProduct_categories_created_byTousersInput)
    connectOrCreate?: Array<product_categoriesCreateOrConnectWithoutProduct_categories_created_byTousersInput>;

    @Field(() => [product_categoriesUpsertWithWhereUniqueWithoutProduct_categories_created_byTousersInput], {nullable:true})
    @Type(() => product_categoriesUpsertWithWhereUniqueWithoutProduct_categories_created_byTousersInput)
    upsert?: Array<product_categoriesUpsertWithWhereUniqueWithoutProduct_categories_created_byTousersInput>;

    @Field(() => product_categoriesCreateManyProduct_categories_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => product_categoriesCreateManyProduct_categories_created_byTousersInputEnvelope)
    createMany?: product_categoriesCreateManyProduct_categories_created_byTousersInputEnvelope;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    set?: Array<product_categoriesWhereUniqueInput>;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    disconnect?: Array<product_categoriesWhereUniqueInput>;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    delete?: Array<product_categoriesWhereUniqueInput>;

    @Field(() => [product_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => product_categoriesWhereUniqueInput)
    connect?: Array<product_categoriesWhereUniqueInput>;

    @Field(() => [product_categoriesUpdateWithWhereUniqueWithoutProduct_categories_created_byTousersInput], {nullable:true})
    @Type(() => product_categoriesUpdateWithWhereUniqueWithoutProduct_categories_created_byTousersInput)
    update?: Array<product_categoriesUpdateWithWhereUniqueWithoutProduct_categories_created_byTousersInput>;

    @Field(() => [product_categoriesUpdateManyWithWhereWithoutProduct_categories_created_byTousersInput], {nullable:true})
    @Type(() => product_categoriesUpdateManyWithWhereWithoutProduct_categories_created_byTousersInput)
    updateMany?: Array<product_categoriesUpdateManyWithWhereWithoutProduct_categories_created_byTousersInput>;

    @Field(() => [product_categoriesScalarWhereInput], {nullable:true})
    @Type(() => product_categoriesScalarWhereInput)
    deleteMany?: Array<product_categoriesScalarWhereInput>;
}
