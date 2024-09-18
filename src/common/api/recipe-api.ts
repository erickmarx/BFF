import { Injectable } from '@nestjs/common';
import { CreateRecipeDTO } from '../../modules/recipe/dto/create-recipe.dto';
import { API_CONFIG } from '../config/api';
import { IRecipe } from '../interface/recipe.interface';
import { TracedRESTDataSource } from '../traced-rest-data-source';

@Injectable()
export class RecipeAPI extends TracedRESTDataSource {
  override baseURL = API_CONFIG.recipe.baseURL;

  async getRecipeById(id: string): Promise<IRecipe> {
    return await this.get(`${id}`);
  }

  async getRecipes(): Promise<IRecipe[]> {
    return await this.get('');
  }

  async createRecipe(recipe: CreateRecipeDTO): Promise<IRecipe> {
    return await this.post('', { body: recipe });
  }

  async updateRecipe(id: string, recipe: CreateRecipeDTO): Promise<IRecipe> {
    return await this.put(`${id}`, { body: recipe });
  }

  async removeRecipe(id: string): Promise<boolean> {
    return await this.delete(`${id}`);
  }
}
