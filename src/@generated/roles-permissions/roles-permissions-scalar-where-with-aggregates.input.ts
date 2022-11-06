import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class roles_permissionsScalarWhereWithAggregatesInput {

    @Field(() => [roles_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<roles_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [roles_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<roles_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [roles_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<roles_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    role_id?: UuidWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    permission_id?: UuidWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    created_by?: UuidNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    updated_by?: UuidNullableWithAggregatesFilter;
}
