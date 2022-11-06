import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProduct_categories_created_byTousersInput } from './users-create-without-product-categories-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProduct_categories_created_byTousersInput } from './users-create-or-connect-without-product-categories-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutProduct_categories_created_byTousersInput {

    @Field(() => usersCreateWithoutProduct_categories_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutProduct_categories_created_byTousersInput)
    create?: usersCreateWithoutProduct_categories_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutProduct_categories_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProduct_categories_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutProduct_categories_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
