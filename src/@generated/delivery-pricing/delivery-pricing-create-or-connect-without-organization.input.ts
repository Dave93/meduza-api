import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateWithoutOrganizationInput } from './delivery-pricing-create-without-organization.input';

@InputType()
export class delivery_pricingCreateOrConnectWithoutOrganizationInput {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;

    @Field(() => delivery_pricingCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => delivery_pricingCreateWithoutOrganizationInput)
    create!: delivery_pricingCreateWithoutOrganizationInput;
}
