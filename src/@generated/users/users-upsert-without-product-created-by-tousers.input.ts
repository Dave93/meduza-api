import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutProduct_created_byTousersInput } from './users-update-without-product-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutProduct_created_byTousersInput } from './users-create-without-product-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutProduct_created_byTousersInput {

    @Field(() => usersUpdateWithoutProduct_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutProduct_created_byTousersInput)
    update!: usersUpdateWithoutProduct_created_byTousersInput;

    @Field(() => usersCreateWithoutProduct_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutProduct_created_byTousersInput)
    create!: usersCreateWithoutProduct_created_byTousersInput;
}
