import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutUsers_roles_usersTousers_roles_updated_byInput } from './users-update-without-users-roles-users-tousers-roles-updated-by.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_roles_usersTousers_roles_updated_byInput } from './users-create-without-users-roles-users-tousers-roles-updated-by.input';

@InputType()
export class usersUpsertWithoutUsers_roles_usersTousers_roles_updated_byInput {

    @Field(() => usersUpdateWithoutUsers_roles_usersTousers_roles_updated_byInput, {nullable:false})
    @Type(() => usersUpdateWithoutUsers_roles_usersTousers_roles_updated_byInput)
    update!: usersUpdateWithoutUsers_roles_usersTousers_roles_updated_byInput;

    @Field(() => usersCreateWithoutUsers_roles_usersTousers_roles_updated_byInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_roles_usersTousers_roles_updated_byInput)
    create!: usersCreateWithoutUsers_roles_usersTousers_roles_updated_byInput;
}
