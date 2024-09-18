import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe.schema';
import { CreateRecipeDTO } from './dto/create-recipe.dto';
import { FilterDTO } from '../../common/dto/filter.dto';
import { RecipeAPI } from '../../common/api/recipe-api';

@Injectable()
export class RecipeService {
  constructor(private recipeAPI: RecipeAPI) {}

  async findOneById(id: string): Promise<Recipe> {
    return await this.recipeAPI.getRecipeById(id);
  }

  async findAll(filter?: FilterDTO): Promise<Recipe[]> {
    return await this.recipeAPI.getRecipes();
  }

  async create(recipe: CreateRecipeDTO): Promise<Recipe> {
    return await this.recipeAPI.createRecipe(recipe);
  }

  async update(id: string, recipe: CreateRecipeDTO): Promise<Recipe> {
    return await this.recipeAPI.updateRecipe(id, recipe);
  }

  async remove(id: string): Promise<boolean> {
    return await this.recipeAPI.removeRecipe(id);
  }
}
