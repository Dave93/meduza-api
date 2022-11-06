import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Product_categoriesSumAggregate {

    @Field(() => Int, {nullable:true})
    sort?: number;
}
