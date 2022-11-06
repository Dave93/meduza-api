import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProduct_updated_byTousersInput } from './users-create-without-product-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProduct_updated_byTousersInput } from './users-create-or-connect-without-product-updated-by-tousers.input';
import { usersUpsertWithoutProduct_updated_byTousersInput } from './users-upsert-without-product-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutProduct_updated_byTousersInput } from './users-update-without-product-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutProduct_updated_byTousersNestedInput {

    @Field(() => usersCreateWithoutProduct_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutProduct_updated_byTousersInput)
    create?: usersCreateWithoutProduct_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutProduct_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProduct_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutProduct_updated_byTousersInput;

    @Field(() => usersUpsertWithoutProduct_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutProduct_updated_byTousersInput)
    upsert?: usersUpsertWithoutProduct_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutProduct_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutProduct_updated_byTousersInput)
    update?: usersUpdateWithoutProduct_updated_byTousersInput;
}
