import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class order_locationsScalarWhereInput {

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    AND?: Array<order_locationsScalarWhereInput>;

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    OR?: Array<order_locationsScalarWhereInput>;

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    NOT?: Array<order_locationsScalarWhereInput>;

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
}
