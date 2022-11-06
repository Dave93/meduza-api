import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { PermissionsRelationFilter } from '../prisma/permissions-relation-filter.input';

@InputType()
export class users_permissionsWhereInput {

    @Field(() => [users_permissionsWhereInput], {nullable:true})
    AND?: Array<users_permissionsWhereInput>;

    @Field(() => [users_permissionsWhereInput], {nullable:true})
    OR?: Array<users_permissionsWhereInput>;

    @Field(() => [users_permissionsWhereInput], {nullable:true})
    NOT?: Array<users_permissionsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    permission_id?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    updated_by?: UuidNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_permissions_created_by?: UsersRelationFilter;

    @Field(() => PermissionsRelationFilter, {nullable:true})
    permissions?: PermissionsRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_permissions_updated_by?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_permissions_user_id?: UsersRelationFilter;
}
