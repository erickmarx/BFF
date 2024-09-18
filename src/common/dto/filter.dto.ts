import { Field, InputType, Int } from '@nestjs/graphql';
import { Min, Max } from 'class-validator';
import { IFilter } from '../interface/filter.interface';

@InputType()
export class FilterDTO implements IFilter {
  @Field(() => Int, { nullable: true })
  @Min(0)
  skip = 0;

  @Field(() => Int, { nullable: true })
  @Min(1)
  @Max(50)
  take = 25;
}
