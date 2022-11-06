import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { OrdersRelationFilter } from '../prisma/orders-relation-filter.input';

@InputType()
export class order_locationsWhereInput {

    @Field(() => [order_locationsWhereInput], {nullable:true})
    AND?: Array<order_locationsWhereInput>;

    @Field(() => [order_locationsWhereInput], {nullable:true})
    OR?: Array<order_locationsWhereInput>;

    @Field(() => [order_locationsWhereInput], {nullable:true})
    NOT?: Array<order_locationsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    order_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    courier_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    order_status_id?: UuidFilter;

    @Field(() => FloatFilter, {nullable:true})
    lat?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    lon?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_locations_created_byTousers?: UsersRelationFilter;

    @Field(() => OrdersRelationFilter, {nullable:true})
    order_locations_orders?: OrdersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_locations_couriers?: UsersRelationFilter;
}
