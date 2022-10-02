import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutPost_prop_types_created_byTousersInput } from './users-update-without-post-prop-types-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_prop_types_created_byTousersInput } from './users-create-without-post-prop-types-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutPost_prop_types_created_byTousersInput {

    @Field(() => usersUpdateWithoutPost_prop_types_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutPost_prop_types_created_byTousersInput)
    update!: usersUpdateWithoutPost_prop_types_created_byTousersInput;

    @Field(() => usersCreateWithoutPost_prop_types_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_prop_types_created_byTousersInput)
    create!: usersCreateWithoutPost_prop_types_created_byTousersInput;
}
