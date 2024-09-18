import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe' })
export class Recipe {
  @Field(() => ID)
  id: string;

  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(() => [Ingredients])
  ingredients: Ingredients[];
}

@ObjectType({ description: 'ingredients' })
export class Ingredients {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  quantity: number;
}
