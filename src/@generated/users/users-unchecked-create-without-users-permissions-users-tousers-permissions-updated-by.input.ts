import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { otpUncheckedCreateNestedManyWithoutUsersInput } from '../otp/otp-unchecked-create-nested-many-without-users.input';
import { permissionsUncheckedCreateNestedManyWithoutUsers_permissions_created_byTousersInput } from '../permissions/permissions-unchecked-create-nested-many-without-users-permissions-created-by-tousers.input';
import { permissionsUncheckedCreateNestedManyWithoutUsers_permissions_updated_byTousersInput } from '../permissions/permissions-unchecked-create-nested-many-without-users-permissions-updated-by-tousers.input';
import { rolesUncheckedCreateNestedManyWithoutUsers_roles_created_byTousersInput } from '../roles/roles-unchecked-create-nested-many-without-users-roles-created-by-tousers.input';
import { rolesUncheckedCreateNestedManyWithoutUsers_roles_updated_byTousersInput } from '../roles/roles-unchecked-create-nested-many-without-users-roles-updated-by-tousers.input';
import { roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput } from '../roles-permissions/roles-permissions-unchecked-create-nested-many-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput } from '../roles-permissions/roles-permissions-unchecked-create-nested-many-without-users-roles-permissions-updated-by-tousers.input';
import { users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput } from '../users-permissions/users-permissions-unchecked-create-nested-many-without-users-users-tousers-permissions-created-by.input';
import { users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput } from '../users-permissions/users-permissions-unchecked-create-nested-many-without-users-users-tousers-permissions-user-id.input';
import { users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput } from '../users-roles/users-roles-unchecked-create-nested-many-without-users-users-tousers-roles-created-by.input';
import { users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput } from '../users-roles/users-roles-unchecked-create-nested-many-without-users-users-tousers-roles-updated-by.input';
import { users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput } from '../users-roles/users-roles-unchecked-create-nested-many-without-users-users-tousers-roles-user-id.input';
import { customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_created_byTousersInput } from '../customers-comments/customers-comments-unchecked-create-nested-many-without-customers-comments-created-by-tousers.input';
import { ordersUncheckedCreateNestedManyWithoutOrders_created_byTousersInput } from '../orders/orders-unchecked-create-nested-many-without-orders-created-by-tousers.input';
import { ordersUncheckedCreateNestedManyWithoutOrders_updated_byTousersInput } from '../orders/orders-unchecked-create-nested-many-without-orders-updated-by-tousers.input';
import { ordersUncheckedCreateNestedManyWithoutOrders_couriersInput } from '../orders/orders-unchecked-create-nested-many-without-orders-couriers.input';
import { order_actionsUncheckedCreateNestedManyWithoutOrder_actions_created_byTousersInput } from '../order-actions/order-actions-unchecked-create-nested-many-without-order-actions-created-by-tousers.input';
import { order_locationsUncheckedCreateNestedManyWithoutOrder_locations_created_byTousersInput } from '../order-locations/order-locations-unchecked-create-nested-many-without-order-locations-created-by-tousers.input';
import { order_locationsUncheckedCreateNestedManyWithoutOrder_locations_couriersInput } from '../order-locations/order-locations-unchecked-create-nested-many-without-order-locations-couriers.input';
import { api_tokensUncheckedCreateNestedManyWithoutApi_tokens_created_byTousersInput } from '../api-tokens/api-tokens-unchecked-create-nested-many-without-api-tokens-created-by-tousers.input';
import { api_tokensUncheckedCreateNestedManyWithoutApi_tokens_updated_byTousersInput } from '../api-tokens/api-tokens-unchecked-create-nested-many-without-api-tokens-updated-by-tousers.input';
import { productUncheckedCreateNestedManyWithoutProduct_created_byTousersInput } from '../product/product-unchecked-create-nested-many-without-product-created-by-tousers.input';
import { productUncheckedCreateNestedManyWithoutProduct_updated_byTousersInput } from '../product/product-unchecked-create-nested-many-without-product-updated-by-tousers.input';
import { product_categoriesUncheckedCreateNestedManyWithoutProduct_categories_created_byTousersInput } from '../product-categories/product-categories-unchecked-create-nested-many-without-product-categories-created-by-tousers.input';
import { product_categoriesUncheckedCreateNestedManyWithoutProduct_categories_updated_byTousersInput } from '../product-categories/product-categories-unchecked-create-nested-many-without-product-categories-updated-by-tousers.input';

@InputType()
export class usersUncheckedCreateWithoutUsers_permissions_usersTousers_permissions_updated_byInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    login!: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:true})
    is_super_user?: boolean;

    @Field(() => user_status, {nullable:false})
    status!: keyof typeof user_status;

    @Field(() => drive_type, {nullable:true})
    drive_type?: keyof typeof drive_type;

    @Field(() => String, {nullable:true})
    card_name?: string;

    @Field(() => String, {nullable:true})
    card_number?: string;

    @Field(() => Date, {nullable:true})
    birth_date?: Date | string;

    @Field(() => String, {nullable:true})
    car_model?: string;

    @Field(() => String, {nullable:true})
    car_number?: string;

    @Field(() => Boolean, {nullable:true})
    is_online?: boolean;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => otpUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    otp?: otpUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => permissionsUncheckedCreateNestedManyWithoutUsers_permissions_created_byTousersInput, {nullable:true})
    permissions_permissions_created_byTousers?: permissionsUncheckedCreateNestedManyWithoutUsers_permissions_created_byTousersInput;

    @Field(() => permissionsUncheckedCreateNestedManyWithoutUsers_permissions_updated_byTousersInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsUncheckedCreateNestedManyWithoutUsers_permissions_updated_byTousersInput;

    @Field(() => rolesUncheckedCreateNestedManyWithoutUsers_roles_created_byTousersInput, {nullable:true})
    roles_roles_created_byTousers?: rolesUncheckedCreateNestedManyWithoutUsers_roles_created_byTousersInput;

    @Field(() => rolesUncheckedCreateNestedManyWithoutUsers_roles_updated_byTousersInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesUncheckedCreateNestedManyWithoutUsers_roles_updated_byTousersInput;

    @Field(() => roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput;

    @Field(() => roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput;

    @Field(() => users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput;

    @Field(() => users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput;

    @Field(() => users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput;

    @Field(() => users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput;

    @Field(() => users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput;

    @Field(() => customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    customers_comments_created_byTousers?: customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_created_byTousersInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_created_byTousersInput, {nullable:true})
    orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutOrders_created_byTousersInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_updated_byTousersInput, {nullable:true})
    orders_updated_byTousers?: ordersUncheckedCreateNestedManyWithoutOrders_updated_byTousersInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_couriersInput, {nullable:true})
    orders_couriers?: ordersUncheckedCreateNestedManyWithoutOrders_couriersInput;

    @Field(() => order_actionsUncheckedCreateNestedManyWithoutOrder_actions_created_byTousersInput, {nullable:true})
    order_actions_created_byTousers?: order_actionsUncheckedCreateNestedManyWithoutOrder_actions_created_byTousersInput;

    @Field(() => order_locationsUncheckedCreateNestedManyWithoutOrder_locations_created_byTousersInput, {nullable:true})
    order_locations_created_byTousers?: order_locationsUncheckedCreateNestedManyWithoutOrder_locations_created_byTousersInput;

    @Field(() => order_locationsUncheckedCreateNestedManyWithoutOrder_locations_couriersInput, {nullable:true})
    order_locations_couriers?: order_locationsUncheckedCreateNestedManyWithoutOrder_locations_couriersInput;

    @Field(() => api_tokensUncheckedCreateNestedManyWithoutApi_tokens_created_byTousersInput, {nullable:true})
    api_tokens_created_byTousers?: api_tokensUncheckedCreateNestedManyWithoutApi_tokens_created_byTousersInput;

    @Field(() => api_tokensUncheckedCreateNestedManyWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    api_tokens_updated_byTousers?: api_tokensUncheckedCreateNestedManyWithoutApi_tokens_updated_byTousersInput;

    @Field(() => productUncheckedCreateNestedManyWithoutProduct_created_byTousersInput, {nullable:true})
    product_created_byTousers?: productUncheckedCreateNestedManyWithoutProduct_created_byTousersInput;

    @Field(() => productUncheckedCreateNestedManyWithoutProduct_updated_byTousersInput, {nullable:true})
    product_updated_byTousers?: productUncheckedCreateNestedManyWithoutProduct_updated_byTousersInput;

    @Field(() => product_categoriesUncheckedCreateNestedManyWithoutProduct_categories_created_byTousersInput, {nullable:true})
    product_categories_created_byTousers?: product_categoriesUncheckedCreateNestedManyWithoutProduct_categories_created_byTousersInput;

    @Field(() => product_categoriesUncheckedCreateNestedManyWithoutProduct_categories_updated_byTousersInput, {nullable:true})
    product_categories_updated_byTousers?: product_categoriesUncheckedCreateNestedManyWithoutProduct_categories_updated_byTousersInput;
}
