import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { OrdersRelationFilter } from '../prisma/orders-relation-filter.input';

@InputType()
export class order_actionsWhereInput {

    @Field(() => [order_actionsWhereInput], {nullable:true})
    AND?: Array<order_actionsWhereInput>;

    @Field(() => [order_actionsWhereInput], {nullable:true})
    OR?: Array<order_actionsWhereInput>;

    @Field(() => [order_actionsWhereInput], {nullable:true})
    NOT?: Array<order_actionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    order_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    action?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    action_text?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_actions_created_byTousers?: UsersRelationFilter;

    @Field(() => OrdersRelationFilter, {nullable:true})
    order_actions_orders?: OrdersRelationFilter;
}
