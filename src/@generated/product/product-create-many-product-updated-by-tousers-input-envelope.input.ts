import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productCreateManyProduct_updated_byTousersInput } from './product-create-many-product-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class productCreateManyProduct_updated_byTousersInputEnvelope {

    @Field(() => [productCreateManyProduct_updated_byTousersInput], {nullable:false})
    @Type(() => productCreateManyProduct_updated_byTousersInput)
    data!: Array<productCreateManyProduct_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
