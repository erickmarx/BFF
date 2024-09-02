import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './recipe.schema';
import { RecipeService } from './recipe.service';
import { FilterDTO } from './dto/filter.dto';
import { CreateRecipeDTO } from './dto/create-recipe.dto';
import { IDataloaders } from '../common/dataloader/dataloader.interface';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(() => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    return this.recipeService.findOneById(id);
  }

  @Query(() => [Recipe])
  async recipes(
    @Args('filter', { nullable: true }) filter?: FilterDTO,
  ): Promise<Recipe[]> {
    return this.recipeService.findAll(filter);
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
