import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { Roles_permissionsListRelationFilter } from '../prisma/roles-permissions-list-relation-filter.input';
import { Users_rolesListRelationFilter } from '../prisma/users-roles-list-relation-filter.input';

@InputType()
export class rolesWhereInput {

    @Field(() => [rolesWhereInput], {nullable:true})
    AND?: Array<rolesWhereInput>;

    @Field(() => [rolesWhereInput], {nullable:true})
    OR?: Array<rolesWhereInput>;

    @Field(() => [rolesWhereInput], {nullable:true})
    NOT?: Array<rolesWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    code?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    updated_by?: UuidNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_roles_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_roles_updated_byTousers?: UsersRelationFilter;

    @Field(() => Roles_permissionsListRelationFilter, {nullable:true})
    roles_permissions?: Roles_permissionsListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles?: Users_rolesListRelationFilter;
}
