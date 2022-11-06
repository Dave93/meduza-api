import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class customersScalarWhereWithAggregatesInput {

    @Field(() => [customersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<customersScalarWhereWithAggregatesInput>;

    @Field(() => [customersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<customersScalarWhereWithAggregatesInput>;

    @Field(() => [customersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<customersScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: StringWithAggregatesFilter;
}
