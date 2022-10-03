import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ordersOrderByRelationAggregateInput } from '../orders/orders-order-by-relation-aggregate.input';

@InputType()
export class order_statusOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    finish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cancel?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    waiting?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    need_location?: keyof typeof SortOrder;

    @Field(() => ordersOrderByRelationAggregateInput, {nullable:true})
    orders_order_status?: ordersOrderByRelationAggregateInput;
}
