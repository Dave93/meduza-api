import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class otpScalarWhereInput {

    @Field(() => [otpScalarWhereInput], {nullable:true})
    AND?: Array<otpScalarWhereInput>;

    @Field(() => [otpScalarWhereInput], {nullable:true})
    OR?: Array<otpScalarWhereInput>;

    @Field(() => [otpScalarWhereInput], {nullable:true})
    NOT?: Array<otpScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidFilter, {nullable:true})
    user_id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    otp?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiry_date?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    verified?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
