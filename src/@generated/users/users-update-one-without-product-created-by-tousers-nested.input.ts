import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProduct_created_byTousersInput } from './users-create-without-product-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProduct_created_byTousersInput } from './users-create-or-connect-without-product-created-by-tousers.input';
import { usersUpsertWithoutProduct_created_byTousersInput } from './users-upsert-without-product-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutProduct_created_byTousersInput } from './users-update-without-product-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutProduct_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutProduct_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutProduct_created_byTousersInput)
    create?: usersCreateWithoutProduct_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutProduct_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProduct_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutProduct_created_byTousersInput;

    @Field(() => usersUpsertWithoutProduct_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutProduct_created_byTousersInput)
    upsert?: usersUpsertWithoutProduct_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutProduct_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutProduct_created_byTousersInput)
    update?: usersUpdateWithoutProduct_created_byTousersInput;
}
