import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class users_permissionsScalarWhereInput {

    @Field(() => [users_permissionsScalarWhereInput], {nullable:true})
    AND?: Array<users_permissionsScalarWhereInput>;

    @Field(() => [users_permissionsScalarWhereInput], {nullable:true})
    OR?: Array<users_permissionsScalarWhereInput>;

    @Field(() => [users_permissionsScalarWhereInput], {nullable:true})
    NOT?: Array<users_permissionsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    permission_id?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    updated_by?: UuidNullableFilter;
}
