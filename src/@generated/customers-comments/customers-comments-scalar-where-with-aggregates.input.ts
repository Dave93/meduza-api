import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class customers_commentsScalarWhereWithAggregatesInput {

    @Field(() => [customers_commentsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<customers_commentsScalarWhereWithAggregatesInput>;

    @Field(() => [customers_commentsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<customers_commentsScalarWhereWithAggregatesInput>;

    @Field(() => [customers_commentsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<customers_commentsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    customer_id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    comment?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    created_by?: UuidNullableWithAggregatesFilter;
}
