import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { productCountOrderByAggregateInput } from './product-count-order-by-aggregate.input';
import { productAvgOrderByAggregateInput } from './product-avg-order-by-aggregate.input';
import { productMaxOrderByAggregateInput } from './product-max-order-by-aggregate.input';
import { productMinOrderByAggregateInput } from './product-min-order-by-aggregate.input';
import { productSumOrderByAggregateInput } from './product-sum-order-by-aggregate.input';

@InputType()
export class productOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    product_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => productCountOrderByAggregateInput, {nullable:true})
    _count?: productCountOrderByAggregateInput;

    @Field(() => productAvgOrderByAggregateInput, {nullable:true})
    _avg?: productAvgOrderByAggregateInput;

    @Field(() => productMaxOrderByAggregateInput, {nullable:true})
    _max?: productMaxOrderByAggregateInput;

    @Field(() => productMinOrderByAggregateInput, {nullable:true})
    _min?: productMinOrderByAggregateInput;

    @Field(() => productSumOrderByAggregateInput, {nullable:true})
    _sum?: productSumOrderByAggregateInput;
}
