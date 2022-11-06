import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class roles_permissionsScalarWhereInput {

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    AND?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    OR?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    NOT?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    role_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    permission_id?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    updated_by?: UuidNullableFilter;
}
