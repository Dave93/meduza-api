import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutOrder_actions_created_byTousersInput } from '../users/users-create-nested-one-without-order-actions-created-by-tousers.input';
import { ordersCreateNestedOneWithoutOrder_actions_ordersInput } from '../orders/orders-create-nested-one-without-order-actions-orders.input';
import { terminalsCreateNestedOneWithoutOrder_actions_terminalsInput } from '../terminals/terminals-create-nested-one-without-order-actions-terminals.input';

@InputType()
export class order_actionsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:false})
    action_text!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutOrder_actions_created_byTousersInput, {nullable:true})
    order_actions_created_byTousers?: usersCreateNestedOneWithoutOrder_actions_created_byTousersInput;

    @Field(() => ordersCreateNestedOneWithoutOrder_actions_ordersInput, {nullable:false})
    order_actions_orders!: ordersCreateNestedOneWithoutOrder_actions_ordersInput;

    @Field(() => terminalsCreateNestedOneWithoutOrder_actions_terminalsInput, {nullable:false})
    order_actions_terminals!: terminalsCreateNestedOneWithoutOrder_actions_terminalsInput;
}
