import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class order_locationsScalarWhereWithAggregatesInput {

    @Field(() => [order_locationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<order_locationsScalarWhereWithAggregatesInput>;

    @Field(() => [order_locationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<order_locationsScalarWhereWithAggregatesInput>;

    @Field(() => [order_locationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<order_locationsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    order_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    courier_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    order_status_id?: UuidWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    lat?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    lon?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    created_by?: UuidNullableWithAggregatesFilter;
}
