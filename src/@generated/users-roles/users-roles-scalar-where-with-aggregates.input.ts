import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class users_rolesScalarWhereWithAggregatesInput {

    @Field(() => [users_rolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<users_rolesScalarWhereWithAggregatesInput>;

    @Field(() => [users_rolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<users_rolesScalarWhereWithAggregatesInput>;

    @Field(() => [users_rolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<users_rolesScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    role_id?: UuidWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    created_by?: UuidNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    updated_by?: UuidNullableWithAggregatesFilter;
}
