import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { otp } from '../otp/otp.model';
import { permissions } from '../permissions/permissions.model';
import { roles } from '../roles/roles.model';
import { roles_permissions } from '../roles-permissions/roles-permissions.model';
import { users_permissions } from '../users-permissions/users-permissions.model';
import { users_roles } from '../users-roles/users-roles.model';
import { customers_comments } from '../customers-comments/customers-comments.model';
import { orders } from '../orders/orders.model';
import { order_actions } from '../order-actions/order-actions.model';
import { order_locations } from '../order-locations/order-locations.model';
import { api_tokens } from '../api-tokens/api-tokens.model';
import { product } from '../product/product.model';
import { product_categories } from '../product-categories/product-categories.model';
import { UsersCount } from '../prisma/users-count.output';

@ObjectType()
export class users {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    login!: string;

    @Field(() => String, {nullable:true})
    first_name!: string | null;

    @Field(() => String, {nullable:true})
    last_name!: string | null;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_super_user!: boolean;

    @Field(() => user_status, {nullable:false})
    status!: keyof typeof user_status;

    @Field(() => drive_type, {nullable:true})
    drive_type!: keyof typeof drive_type | null;

    @Field(() => String, {nullable:true})
    card_name!: string | null;

    @Field(() => String, {nullable:true})
    card_number!: string | null;

    @Field(() => Date, {nullable:true})
    birth_date!: Date | null;

    @Field(() => String, {nullable:true})
    car_model!: string | null;

    @Field(() => String, {nullable:true})
    car_number!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_online!: boolean;

    @Field(() => Float, {nullable:true,defaultValue:0})
    latitude!: number | null;

    @Field(() => Float, {nullable:true,defaultValue:0})
    longitude!: number | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [otp], {nullable:true})
    otp?: Array<otp>;

    @Field(() => [permissions], {nullable:true})
    permissions_permissions_created_byTousers?: Array<permissions>;

    @Field(() => [permissions], {nullable:true})
    permissions_permissions_updated_byTousers?: Array<permissions>;

    @Field(() => [roles], {nullable:true})
    roles_roles_created_byTousers?: Array<roles>;

    @Field(() => [roles], {nullable:true})
    roles_roles_updated_byTousers?: Array<roles>;

    @Field(() => [roles_permissions], {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: Array<roles_permissions>;

    @Field(() => [roles_permissions], {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: Array<roles_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: Array<users_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: Array<users_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: Array<users_permissions>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_created_by?: Array<users_roles>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_updated_by?: Array<users_roles>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_user_id?: Array<users_roles>;

    @Field(() => [customers_comments], {nullable:true})
    customers_comments_created_byTousers?: Array<customers_comments>;

    @Field(() => [orders], {nullable:true})
    orders_created_byTousers?: Array<orders>;

    @Field(() => [orders], {nullable:true})
    orders_updated_byTousers?: Array<orders>;

    @Field(() => [orders], {nullable:true})
    orders_couriers?: Array<orders>;

    @Field(() => [order_actions], {nullable:true})
    order_actions_created_byTousers?: Array<order_actions>;

    @Field(() => [order_locations], {nullable:true})
    order_locations_created_byTousers?: Array<order_locations>;

    @Field(() => [order_locations], {nullable:true})
    order_locations_couriers?: Array<order_locations>;

    @Field(() => [api_tokens], {nullable:true})
    api_tokens_created_byTousers?: Array<api_tokens>;

    @Field(() => [api_tokens], {nullable:true})
    api_tokens_updated_byTousers?: Array<api_tokens>;

    @Field(() => [product], {nullable:true})
    product_created_byTousers?: Array<product>;

    @Field(() => [product], {nullable:true})
    product_updated_byTousers?: Array<product>;

    @Field(() => [product_categories], {nullable:true})
    product_categories_created_byTousers?: Array<product_categories>;

    @Field(() => [product_categories], {nullable:true})
    product_categories_updated_byTousers?: Array<product_categories>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}
