import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './recipe.schema';
import { RecipeService } from './recipe.service';
import { FilterDTO } from '../../common/dto/filter.dto';
import { CreateRecipeDTO } from './dto/create-recipe.dto';
import { IDataloaders } from '../../common/dataloader/dataloader.interface';
import { PubSub } from 'graphql-subscriptions';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(() => Recipe)
  async recipe(
    @Args('id') id: string,
    @Context('pubSub') pubSub: PubSub,
  ): Promise<Recipe> {
    // await pubSub.publish('implementation', {
    //   id: '2',
    //   title: 'Recipe 2',
    //   description: 'Description 2',
    //   creationDate: new Date(),
    //   ingredients: [
    //     { name: 'Flour', quantity: 1 },
    //     { name: 'Sugar', quantity: 1 },
    //     { name: 'Butter', quantity: 1 },
    //   ],
    // });

    return await this.recipeService.findOneById(id);
  }

  @Query(() => [Recipe])
  async recipes(
    @Args('filter', { nullable: true }) filter?: FilterDTO,
  ): Promise<Recipe[]> {
    return await this.recipeService.findAll(filter);
  }

  @Query(() => [Recipe])
  async recipesById(
    @Args('ids', { type: () => [String] }) ids: string[],
    @Context('loaders') loaders: IDataloaders,
  ): Promise<Recipe[]> {
    return (await loaders.recipes.findByIds.loadMany(ids)) as Recipe[];
  }

  @Mutation(() => Recipe)
  async createRecipe(@Args('recipe') recipe: CreateRecipeDTO): Promise<Recipe> {
    return await this.recipeService.create(recipe);
  }

  @Mutation(() => Recipe)
  async updateRecipe(
    @Args('id') id: string,
    @Args('recipe') recipe: CreateRecipeDTO,
  ): Promise<Recipe> {
    return await this.recipeService.update(id, recipe);
  }

  @Mutation(() => Boolean)
  async removeRecipe(@Args('id') id: string): Promise<boolean> {
    return await this.recipeService.remove(id);
  }
}
