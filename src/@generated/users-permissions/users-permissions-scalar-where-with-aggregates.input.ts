import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class users_permissionsScalarWhereWithAggregatesInput {

    @Field(() => [users_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<users_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [users_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<users_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [users_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<users_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    user_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    permission_id?: UuidWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    created_by?: UuidNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    updated_by?: UuidNullableWithAggregatesFilter;
}
