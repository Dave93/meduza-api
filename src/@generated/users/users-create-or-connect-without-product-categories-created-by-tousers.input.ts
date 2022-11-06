import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutProduct_categories_created_byTousersInput } from './users-create-without-product-categories-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutProduct_categories_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutProduct_categories_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutProduct_categories_created_byTousersInput)
    create!: usersCreateWithoutProduct_categories_created_byTousersInput;
}
