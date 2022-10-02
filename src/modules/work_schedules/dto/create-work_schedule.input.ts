import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkScheduleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
