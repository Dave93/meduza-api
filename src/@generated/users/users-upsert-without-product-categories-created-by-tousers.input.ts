import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutProduct_categories_created_byTousersInput } from './users-update-without-product-categories-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutProduct_categories_created_byTousersInput } from './users-create-without-product-categories-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutProduct_categories_created_byTousersInput {

    @Field(() => usersUpdateWithoutProduct_categories_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutProduct_categories_created_byTousersInput)
    update!: usersUpdateWithoutProduct_categories_created_byTousersInput;

    @Field(() => usersCreateWithoutProduct_categories_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutProduct_categories_created_byTousersInput)
    create!: usersCreateWithoutProduct_categories_created_byTousersInput;
}
