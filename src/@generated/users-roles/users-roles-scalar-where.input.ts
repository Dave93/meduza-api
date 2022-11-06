import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class users_rolesScalarWhereInput {

    @Field(() => [users_rolesScalarWhereInput], {nullable:true})
    AND?: Array<users_rolesScalarWhereInput>;

    @Field(() => [users_rolesScalarWhereInput], {nullable:true})
    OR?: Array<users_rolesScalarWhereInput>;

    @Field(() => [users_rolesScalarWhereInput], {nullable:true})
    NOT?: Array<users_rolesScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    role_id?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    updated_by?: UuidNullableFilter;
}
