import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { otpOrderByRelationAggregateInput } from '../otp/otp-order-by-relation-aggregate.input';
import { permissionsOrderByRelationAggregateInput } from '../permissions/permissions-order-by-relation-aggregate.input';
import { rolesOrderByRelationAggregateInput } from '../roles/roles-order-by-relation-aggregate.input';
import { roles_permissionsOrderByRelationAggregateInput } from '../roles-permissions/roles-permissions-order-by-relation-aggregate.input';
import { users_permissionsOrderByRelationAggregateInput } from '../users-permissions/users-permissions-order-by-relation-aggregate.input';
import { users_rolesOrderByRelationAggregateInput } from '../users-roles/users-roles-order-by-relation-aggregate.input';
import { customers_commentsOrderByRelationAggregateInput } from '../customers-comments/customers-comments-order-by-relation-aggregate.input';
import { ordersOrderByRelationAggregateInput } from '../orders/orders-order-by-relation-aggregate.input';
import { order_actionsOrderByRelationAggregateInput } from '../order-actions/order-actions-order-by-relation-aggregate.input';
import { order_locationsOrderByRelationAggregateInput } from '../order-locations/order-locations-order-by-relation-aggregate.input';
import { api_tokensOrderByRelationAggregateInput } from '../api-tokens/api-tokens-order-by-relation-aggregate.input';

@InputType()
export class usersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    login?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_super_user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    drive_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    card_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    card_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birth_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    car_model?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    car_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_online?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => otpOrderByRelationAggregateInput, {nullable:true})
    otp?: otpOrderByRelationAggregateInput;

    @Field(() => permissionsOrderByRelationAggregateInput, {nullable:true})
    permissions_permissions_created_byTousers?: permissionsOrderByRelationAggregateInput;

    @Field(() => permissionsOrderByRelationAggregateInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsOrderByRelationAggregateInput;

    @Field(() => rolesOrderByRelationAggregateInput, {nullable:true})
    roles_roles_created_byTousers?: rolesOrderByRelationAggregateInput;

    @Field(() => rolesOrderByRelationAggregateInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesOrderByRelationAggregateInput;

    @Field(() => roles_permissionsOrderByRelationAggregateInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsOrderByRelationAggregateInput;

    @Field(() => roles_permissionsOrderByRelationAggregateInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsOrderByRelationAggregateInput;

    @Field(() => users_permissionsOrderByRelationAggregateInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsOrderByRelationAggregateInput;

    @Field(() => users_permissionsOrderByRelationAggregateInput, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: users_permissionsOrderByRelationAggregateInput;

    @Field(() => users_permissionsOrderByRelationAggregateInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsOrderByRelationAggregateInput;

    @Field(() => users_rolesOrderByRelationAggregateInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesOrderByRelationAggregateInput;

    @Field(() => users_rolesOrderByRelationAggregateInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesOrderByRelationAggregateInput;

    @Field(() => users_rolesOrderByRelationAggregateInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesOrderByRelationAggregateInput;

    @Field(() => customers_commentsOrderByRelationAggregateInput, {nullable:true})
    customers_comments_created_byTousers?: customers_commentsOrderByRelationAggregateInput;

    @Field(() => ordersOrderByRelationAggregateInput, {nullable:true})
    orders_created_byTousers?: ordersOrderByRelationAggregateInput;

    @Field(() => ordersOrderByRelationAggregateInput, {nullable:true})
    orders_updated_byTousers?: ordersOrderByRelationAggregateInput;

    @Field(() => ordersOrderByRelationAggregateInput, {nullable:true})
    orders_couriers?: ordersOrderByRelationAggregateInput;

    @Field(() => order_actionsOrderByRelationAggregateInput, {nullable:true})
    order_actions_created_byTousers?: order_actionsOrderByRelationAggregateInput;

    @Field(() => order_locationsOrderByRelationAggregateInput, {nullable:true})
    order_locations_created_byTousers?: order_locationsOrderByRelationAggregateInput;

    @Field(() => order_locationsOrderByRelationAggregateInput, {nullable:true})
    order_locations_couriers?: order_locationsOrderByRelationAggregateInput;

    @Field(() => api_tokensOrderByRelationAggregateInput, {nullable:true})
    api_tokens_created_byTousers?: api_tokensOrderByRelationAggregateInput;

    @Field(() => api_tokensOrderByRelationAggregateInput, {nullable:true})
    api_tokens_updated_byTousers?: api_tokensOrderByRelationAggregateInput;
}
