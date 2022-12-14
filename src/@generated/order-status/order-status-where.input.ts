import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { OrdersListRelationFilter } from '../prisma/orders-list-relation-filter.input';

@InputType()
export class order_statusWhereInput {

    @Field(() => [order_statusWhereInput], {nullable:true})
    AND?: Array<order_statusWhereInput>;

    @Field(() => [order_statusWhereInput], {nullable:true})
    OR?: Array<order_statusWhereInput>;

    @Field(() => [order_statusWhereInput], {nullable:true})
    NOT?: Array<order_statusWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    sort?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    finish?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    cancel?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    waiting?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    need_location?: BoolFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_order_status?: OrdersListRelationFilter;
}
