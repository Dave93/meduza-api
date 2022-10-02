import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput } from './users-create-without-users-permissions-users-tousers-permissions-user-id.input';

@InputType()
export class usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_user_idInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput)
    create!: usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput;
}
