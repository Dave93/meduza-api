import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class customers_commentsScalarWhereInput {

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    AND?: Array<customers_commentsScalarWhereInput>;

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    OR?: Array<customers_commentsScalarWhereInput>;

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    NOT?: Array<customers_commentsScalarWhereInput>;

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
}
