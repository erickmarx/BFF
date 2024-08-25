import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './recipe.schema';
import { RecipeService } from './recipe.service';
import { FilterDTO } from './dto/filter.dto';
import { CreateRecipeDTO } from './dto/create-recipe.dto';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(() => Recipe)
  async recipe(
    @Context() context: any,
    @Args('id') id: string,
  ): Promise<Recipe> {
    console.log(context.dataSources)
    return this.recipeService.findOneById(id);
  }

  @Query(() => [Recipe])
  async recipes(
    @Args('filter', { nullable: true }) filter?: FilterDTO,
  ): Promise<Recipe[]> {
    return this.recipeService.findAll(filter);
  }

  @Mutation(() => Recipe)
  async createRecipe(@Args('recipe') recipe: CreateRecipeDTO): Promise<Recipe> {
    return this.recipeService.create(recipe);
  }

  @Mutation(() => Recipe)
  async updateRecipe(
    @Args('id') id: string,
    @Args('recipe') recipe: CreateRecipeDTO,
  ): Promise<Recipe> {
    return this.recipeService.update(id, recipe);
  }

  @Mutation(() => Boolean)
  async removeRecipe(@Args('id') id: string): Promise<boolean> {
    return this.recipeService.remove(id);
  }
}
