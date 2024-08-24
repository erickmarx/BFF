import { Field, InputType, Int } from '@nestjs/graphql';
import { Min, Max } from 'class-validator';

@InputType()
export class FilterDTO {
  @Field(() => Int, { nullable: true })
  @Min(0)
  skip = 0;

  @Field(() => Int, { nullable: true })
  @Min(1)
  @Max(50)
  take = 25;
}
