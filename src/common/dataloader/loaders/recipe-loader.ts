import { Injectable } from '@nestjs/common';
import { RecipeService } from '../../../modules/recipe/recipe.service';
import * as DataLoader from 'dataloader';
import { Recipe } from '../../../modules/recipe/recipe.schema';

@Injectable()
export class RecipeLoader {
  constructor(private recipeService: RecipeService) {}

  findByIds(): DataLoader<string, Recipe> {
    return new DataLoader<string, Recipe>(
      async (ids) => await this.recipeService.findAll(),
    );
  }
}
