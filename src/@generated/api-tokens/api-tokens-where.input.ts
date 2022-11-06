import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';

@InputType()
export class api_tokensWhereInput {

    @Field(() => [api_tokensWhereInput], {nullable:true})
    AND?: Array<api_tokensWhereInput>;

    @Field(() => [api_tokensWhereInput], {nullable:true})
    OR?: Array<api_tokensWhereInput>;

    @Field(() => [api_tokensWhereInput], {nullable:true})
    NOT?: Array<api_tokensWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    updated_by?: UuidNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    api_tokens_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    api_tokens_updated_byTousers?: UsersRelationFilter;
}
