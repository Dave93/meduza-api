import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Enumuser_statusFilter } from '../prisma/enumuser-status-filter.input';
import { Enumdrive_typeNullableFilter } from '../prisma/enumdrive-type-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OtpListRelationFilter } from '../prisma/otp-list-relation-filter.input';
import { PermissionsListRelationFilter } from '../prisma/permissions-list-relation-filter.input';
import { RolesListRelationFilter } from '../prisma/roles-list-relation-filter.input';
import { Roles_permissionsListRelationFilter } from '../prisma/roles-permissions-list-relation-filter.input';
import { Users_permissionsListRelationFilter } from '../prisma/users-permissions-list-relation-filter.input';
import { Users_rolesListRelationFilter } from '../prisma/users-roles-list-relation-filter.input';
import { Customers_commentsListRelationFilter } from '../prisma/customers-comments-list-relation-filter.input';
import { OrdersListRelationFilter } from '../prisma/orders-list-relation-filter.input';
import { Order_actionsListRelationFilter } from '../prisma/order-actions-list-relation-filter.input';
import { Order_locationsListRelationFilter } from '../prisma/order-locations-list-relation-filter.input';
import { Api_tokensListRelationFilter } from '../prisma/api-tokens-list-relation-filter.input';

@InputType()
export class usersWhereInput {

    @Field(() => [usersWhereInput], {nullable:true})
    AND?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    OR?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    NOT?: Array<usersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    login?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    first_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_super_user?: BoolFilter;

    @Field(() => Enumuser_statusFilter, {nullable:true})
    status?: Enumuser_statusFilter;

    @Field(() => Enumdrive_typeNullableFilter, {nullable:true})
    drive_type?: Enumdrive_typeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    card_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    card_number?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birth_date?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    car_model?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    car_number?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_online?: BoolFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    latitude?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    longitude?: FloatNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => OtpListRelationFilter, {nullable:true})
    otp?: OtpListRelationFilter;

    @Field(() => PermissionsListRelationFilter, {nullable:true})
    permissions_permissions_created_byTousers?: PermissionsListRelationFilter;

    @Field(() => PermissionsListRelationFilter, {nullable:true})
    permissions_permissions_updated_byTousers?: PermissionsListRelationFilter;

    @Field(() => RolesListRelationFilter, {nullable:true})
    roles_roles_created_byTousers?: RolesListRelationFilter;

    @Field(() => RolesListRelationFilter, {nullable:true})
    roles_roles_updated_byTousers?: RolesListRelationFilter;

    @Field(() => Roles_permissionsListRelationFilter, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: Roles_permissionsListRelationFilter;

    @Field(() => Roles_permissionsListRelationFilter, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: Roles_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: Users_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: Users_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: Users_permissionsListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_created_by?: Users_rolesListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: Users_rolesListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_user_id?: Users_rolesListRelationFilter;

    @Field(() => Customers_commentsListRelationFilter, {nullable:true})
    customers_comments_created_byTousers?: Customers_commentsListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_created_byTousers?: OrdersListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_updated_byTousers?: OrdersListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_couriers?: OrdersListRelationFilter;

    @Field(() => Order_actionsListRelationFilter, {nullable:true})
    order_actions_created_byTousers?: Order_actionsListRelationFilter;

    @Field(() => Order_locationsListRelationFilter, {nullable:true})
    order_locations_created_byTousers?: Order_locationsListRelationFilter;

    @Field(() => Order_locationsListRelationFilter, {nullable:true})
    order_locations_couriers?: Order_locationsListRelationFilter;

    @Field(() => Api_tokensListRelationFilter, {nullable:true})
    api_tokens_created_byTousers?: Api_tokensListRelationFilter;

    @Field(() => Api_tokensListRelationFilter, {nullable:true})
    api_tokens_updated_byTousers?: Api_tokensListRelationFilter;
}
