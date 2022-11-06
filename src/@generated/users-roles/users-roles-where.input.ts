import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { RolesRelationFilter } from '../prisma/roles-relation-filter.input';

@InputType()
export class users_rolesWhereInput {

    @Field(() => [users_rolesWhereInput], {nullable:true})
    AND?: Array<users_rolesWhereInput>;

    @Field(() => [users_rolesWhereInput], {nullable:true})
    OR?: Array<users_rolesWhereInput>;

    @Field(() => [users_rolesWhereInput], {nullable:true})
    NOT?: Array<users_rolesWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    role_id?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    updated_by?: UuidNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_roles_created_by?: UsersRelationFilter;

    @Field(() => RolesRelationFilter, {nullable:true})
    roles?: RolesRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_roles_updated_by?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_roles_user_id?: UsersRelationFilter;
}
