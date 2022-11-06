import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { PermissionsRelationFilter } from '../prisma/permissions-relation-filter.input';
import { RolesRelationFilter } from '../prisma/roles-relation-filter.input';

@InputType()
export class roles_permissionsWhereInput {

    @Field(() => [roles_permissionsWhereInput], {nullable:true})
    AND?: Array<roles_permissionsWhereInput>;

    @Field(() => [roles_permissionsWhereInput], {nullable:true})
    OR?: Array<roles_permissionsWhereInput>;

    @Field(() => [roles_permissionsWhereInput], {nullable:true})
    NOT?: Array<roles_permissionsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    role_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    permission_id?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    updated_by?: UuidNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_roles_permissions_created_byTousers?: UsersRelationFilter;

    @Field(() => PermissionsRelationFilter, {nullable:true})
    permissions?: PermissionsRelationFilter;

    @Field(() => RolesRelationFilter, {nullable:true})
    roles?: RolesRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_roles_permissions_updated_byTousers?: UsersRelationFilter;
}
