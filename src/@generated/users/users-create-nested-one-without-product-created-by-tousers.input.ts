import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProduct_created_byTousersInput } from './users-create-without-product-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProduct_created_byTousersInput } from './users-create-or-connect-without-product-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutProduct_created_byTousersInput {

    @Field(() => usersCreateWithoutProduct_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutProduct_created_byTousersInput)
    create?: usersCreateWithoutProduct_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutProduct_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProduct_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutProduct_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
