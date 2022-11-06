import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProduct_updated_byTousersInput } from './users-create-without-product-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProduct_updated_byTousersInput } from './users-create-or-connect-without-product-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutProduct_updated_byTousersInput {

    @Field(() => usersCreateWithoutProduct_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutProduct_updated_byTousersInput)
    create?: usersCreateWithoutProduct_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutProduct_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProduct_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutProduct_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
