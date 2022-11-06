import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutProduct_categories_updated_byTousersInput } from './users-update-without-product-categories-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutProduct_categories_updated_byTousersInput } from './users-create-without-product-categories-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutProduct_categories_updated_byTousersInput {

    @Field(() => usersUpdateWithoutProduct_categories_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutProduct_categories_updated_byTousersInput)
    update!: usersUpdateWithoutProduct_categories_updated_byTousersInput;

    @Field(() => usersCreateWithoutProduct_categories_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutProduct_categories_updated_byTousersInput)
    create!: usersCreateWithoutProduct_categories_updated_byTousersInput;
}
