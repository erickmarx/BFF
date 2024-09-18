import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, Max, MaxLength } from 'class-validator';
import { Ingredients, Recipe } from '../recipe.schema';

@InputType()
export class CreateRecipeDTO implements Omit<Recipe, 'id' | 'creationDate'> {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  description?: string;

  @Field(() => [IngredientsDTO])
  ingredients: IngredientsDTO[];
}

@InputType()
class IngredientsDTO implements Ingredients {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  @Max(30)
  quantity: number;
}
