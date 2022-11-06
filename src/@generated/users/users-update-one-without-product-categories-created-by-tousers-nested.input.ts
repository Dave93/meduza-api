import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProduct_categories_created_byTousersInput } from './users-create-without-product-categories-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProduct_categories_created_byTousersInput } from './users-create-or-connect-without-product-categories-created-by-tousers.input';
import { usersUpsertWithoutProduct_categories_created_byTousersInput } from './users-upsert-without-product-categories-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutProduct_categories_created_byTousersInput } from './users-update-without-product-categories-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutProduct_categories_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutProduct_categories_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutProduct_categories_created_byTousersInput)
    create?: usersCreateWithoutProduct_categories_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutProduct_categories_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProduct_categories_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutProduct_categories_created_byTousersInput;

    @Field(() => usersUpsertWithoutProduct_categories_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutProduct_categories_created_byTousersInput)
    upsert?: usersUpsertWithoutProduct_categories_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutProduct_categories_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutProduct_categories_created_byTousersInput)
    update?: usersUpdateWithoutProduct_categories_created_byTousersInput;
}
