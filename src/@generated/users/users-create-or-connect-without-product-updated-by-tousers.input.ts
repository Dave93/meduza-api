import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutProduct_updated_byTousersInput } from './users-create-without-product-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutProduct_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutProduct_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutProduct_updated_byTousersInput)
    create!: usersCreateWithoutProduct_updated_byTousersInput;
}
