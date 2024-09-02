import { Injectable } from '@nestjs/common';
import { RecipeService } from '../../../recipe/recipe.service';
import * as DataLoader from 'dataloader';
import { Recipe } from '../../../recipe/recipe.schema';

@Injectable()
export class RecipeLoader {
  constructor(private recipeService: RecipeService) {}

  findByIds(): DataLoader<string, Recipe> {
    return new DataLoader<string, Recipe>(
      async (ids) => await this.recipeService.findByIds(ids.map(String)),
    );
  }
}
