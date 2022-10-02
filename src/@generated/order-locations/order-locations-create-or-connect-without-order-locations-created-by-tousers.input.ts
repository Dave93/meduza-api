import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { Type } from 'class-transformer';
import { order_locationsCreateWithoutOrder_locations_created_byTousersInput } from './order-locations-create-without-order-locations-created-by-tousers.input';

@InputType()
export class order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput {

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;

    @Field(() => order_locationsCreateWithoutOrder_locations_created_byTousersInput, {nullable:false})
    @Type(() => order_locationsCreateWithoutOrder_locations_created_byTousersInput)
    create!: order_locationsCreateWithoutOrder_locations_created_byTousersInput;
}
