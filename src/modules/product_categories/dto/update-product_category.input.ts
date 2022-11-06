import { CreateProductCategoryInput } from './create-product_category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductCategoryInput extends PartialType(CreateProductCategoryInput) {
  @Field(() => Int)
  id: number;
}
