import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutProduct_updated_byTousersInput } from './users-update-without-product-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutProduct_updated_byTousersInput } from './users-create-without-product-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutProduct_updated_byTousersInput {

    @Field(() => usersUpdateWithoutProduct_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutProduct_updated_byTousersInput)
    update!: usersUpdateWithoutProduct_updated_byTousersInput;

    @Field(() => usersCreateWithoutProduct_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutProduct_updated_byTousersInput)
    create!: usersCreateWithoutProduct_updated_byTousersInput;
}
