import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput } from '../users/users-update-one-without-roles-roles-updated-by-tousers-nested.input';
import { roles_permissionsUpdateManyWithoutRolesNestedInput } from '../roles-permissions/roles-permissions-update-many-without-roles-nested.input';
import { users_rolesUpdateManyWithoutRolesNestedInput } from '../users-roles/users-roles-update-many-without-roles-nested.input';

@InputType()
export class rolesUpdateWithoutUsers_roles_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput, {nullable:true})
    users_roles_updated_byTousers?: usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput;

    @Field(() => roles_permissionsUpdateManyWithoutRolesNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUpdateManyWithoutRolesNestedInput;

    @Field(() => users_rolesUpdateManyWithoutRolesNestedInput, {nullable:true})
    users_roles?: users_rolesUpdateManyWithoutRolesNestedInput;
}