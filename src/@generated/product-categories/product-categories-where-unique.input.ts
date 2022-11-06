import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class product_categoriesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
