import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesWhereUniqueInput } from './users-work-schedules-where-unique.input';
import { Type } from 'class-transformer';
import { users_work_schedulesCreateWithoutWork_schedulesInput } from './users-work-schedules-create-without-work-schedules.input';

@InputType()
export class users_work_schedulesCreateOrConnectWithoutWork_schedulesInput {

    @Field(() => users_work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => users_work_schedulesWhereUniqueInput)
    where!: users_work_schedulesWhereUniqueInput;

    @Field(() => users_work_schedulesCreateWithoutWork_schedulesInput, {nullable:false})
    @Type(() => users_work_schedulesCreateWithoutWork_schedulesInput)
    create!: users_work_schedulesCreateWithoutWork_schedulesInput;
}
