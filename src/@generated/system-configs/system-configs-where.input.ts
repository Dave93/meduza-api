import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class system_configsWhereInput {

    @Field(() => [system_configsWhereInput], {nullable:true})
    AND?: Array<system_configsWhereInput>;

    @Field(() => [system_configsWhereInput], {nullable:true})
    OR?: Array<system_configsWhereInput>;

    @Field(() => [system_configsWhereInput], {nullable:true})
    NOT?: Array<system_configsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
