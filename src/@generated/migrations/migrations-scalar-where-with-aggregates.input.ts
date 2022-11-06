import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class migrationsScalarWhereWithAggregatesInput {

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    timestamp?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
