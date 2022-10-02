import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Order_actionsCountAggregate } from './order-actions-count-aggregate.output';
import { Order_actionsAvgAggregate } from './order-actions-avg-aggregate.output';
import { Order_actionsSumAggregate } from './order-actions-sum-aggregate.output';
import { Order_actionsMinAggregate } from './order-actions-min-aggregate.output';
import { Order_actionsMaxAggregate } from './order-actions-max-aggregate.output';

@ObjectType()
export class AggregateOrder_actions {

    @Field(() => Order_actionsCountAggregate, {nullable:true})
    _count?: Order_actionsCountAggregate;

    @Field(() => Order_actionsAvgAggregate, {nullable:true})
    _avg?: Order_actionsAvgAggregate;

    @Field(() => Order_actionsSumAggregate, {nullable:true})
    _sum?: Order_actionsSumAggregate;

    @Field(() => Order_actionsMinAggregate, {nullable:true})
    _min?: Order_actionsMinAggregate;

    @Field(() => Order_actionsMaxAggregate, {nullable:true})
    _max?: Order_actionsMaxAggregate;
}
