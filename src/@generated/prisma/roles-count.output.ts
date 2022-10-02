import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RolesCount {

    @Field(() => Int, {nullable:false})
    roles_permissions!: number;

    @Field(() => Int, {nullable:false})
    users_roles!: number;
}
