import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateManyProduct_created_byTousersInput } from './product-create-many-product-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class productCreateManyProduct_created_byTousersInputEnvelope {

    @Field(() => [productCreateManyProduct_created_byTousersInput], {nullable:false})
    @Type(() => productCreateManyProduct_created_byTousersInput)
    data!: Array<productCreateManyProduct_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
