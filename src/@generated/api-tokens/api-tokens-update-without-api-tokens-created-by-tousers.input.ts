import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutApi_tokens_updated_byTousersNestedInput } from '../users/users-update-one-without-api-tokens-updated-by-tousers-nested.input';

@InputType()
export class api_tokensUpdateWithoutApi_tokens_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutApi_tokens_updated_byTousersNestedInput, {nullable:true})
    api_tokens_updated_byTousers?: usersUpdateOneWithoutApi_tokens_updated_byTousersNestedInput;
}
