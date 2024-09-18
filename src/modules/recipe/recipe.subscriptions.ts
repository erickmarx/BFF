import { Args, Context, Resolver, Subscription } from '@nestjs/graphql';
import { Recipe } from './recipe.schema';
import { PubSub } from 'graphql-subscriptions';
import { FilterSubscription } from '../../common/filter-subscription';

@Resolver(() => Recipe)
export class RecipeSubscriptions {
  constructor() {}

  @Subscription(
    () => Recipe,
    FilterSubscription((payload, variables) => {
      return payload.id === variables.id;
    }),
  )
  implementation(@Args('id') id: string, @Context('pubSub') pubSub: PubSub) {
    return pubSub.asyncIterator('implementation');
  }
}
