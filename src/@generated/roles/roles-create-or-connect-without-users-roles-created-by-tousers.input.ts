import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { Type } from 'class-transformer';
import { rolesCreateWithoutUsers_roles_created_byTousersInput } from './roles-create-without-users-roles-created-by-tousers.input';

@InputType()
export class rolesCreateOrConnectWithoutUsers_roles_created_byTousersInput {

    @Field(() => rolesWhereUniqueInput, {nullable:false})
    @Type(() => rolesWhereUniqueInput)
    where!: rolesWhereUniqueInput;

    @Field(() => rolesCreateWithoutUsers_roles_created_byTousersInput, {nullable:false})
    @Type(() => rolesCreateWithoutUsers_roles_created_byTousersInput)
    create!: rolesCreateWithoutUsers_roles_created_byTousersInput;
}
