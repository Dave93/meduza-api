import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Users_work_schedulesCountAggregate } from './users-work-schedules-count-aggregate.output';
import { Users_work_schedulesMinAggregate } from './users-work-schedules-min-aggregate.output';
import { Users_work_schedulesMaxAggregate } from './users-work-schedules-max-aggregate.output';

@ObjectType()
export class Users_work_schedulesGroupBy {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    work_schedule_id!: string;

    @Field(() => Users_work_schedulesCountAggregate, {nullable:true})
    _count?: Users_work_schedulesCountAggregate;

    @Field(() => Users_work_schedulesMinAggregate, {nullable:true})
    _min?: Users_work_schedulesMinAggregate;

    @Field(() => Users_work_schedulesMaxAggregate, {nullable:true})
    _max?: Users_work_schedulesMaxAggregate;
}
