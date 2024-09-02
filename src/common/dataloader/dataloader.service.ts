import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { IDataloaders } from './dataloader.interface';
import { RecipeService } from '../../recipe/recipe.service';
import { Recipe } from '../../recipe/recipe.schema';

@Injectable()
export class DataloaderService {
  constructor(private readonly recipeService: RecipeService) {}

  getLoaders(): IDataloaders {
    return {
      recipes: {
        findByIds: this.recipesFindByIds(),
      },
    };
  }

  private recipesFindByIds() {
    return new DataLoader<string, Recipe>(
      async (ids) => await this.recipeService.findByIds(ids.map(String)),
    );
  }
}
