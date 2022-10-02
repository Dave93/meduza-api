import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sale_type } from '../prisma/sale-type.enum';
import { type } from '../prisma/type.enum';

@InputType()
export class post_prop_typesCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => sale_type, {nullable:true})
    sale_type?: keyof typeof sale_type;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => type, {nullable:true})
    type?: keyof typeof type;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
