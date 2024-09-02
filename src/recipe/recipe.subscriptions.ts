import { Resolver, Subscription } from '@nestjs/graphql';
import { Recipe } from './recipe.schema';
import { pubSub } from '../common/pub-sub';

@Resolver(() => Recipe)
export class RecipeSubscriptions {
  constructor() {}

  @Subscription(() => String)
  teste() {
    return pubSub.asyncIterator('teste');
  }
}
