import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { CustomersRelationFilter } from '../prisma/customers-relation-filter.input';

@InputType()
export class customers_commentsWhereInput {

    @Field(() => [customers_commentsWhereInput], {nullable:true})
    AND?: Array<customers_commentsWhereInput>;

    @Field(() => [customers_commentsWhereInput], {nullable:true})
    OR?: Array<customers_commentsWhereInput>;

    @Field(() => [customers_commentsWhereInput], {nullable:true})
    NOT?: Array<customers_commentsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    customer_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    created_by?: UuidNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    customers_comments_created_byTousers?: UsersRelationFilter;

    @Field(() => CustomersRelationFilter, {nullable:true})
    customers_comments_customers?: CustomersRelationFilter;
}
