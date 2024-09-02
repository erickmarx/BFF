import { Injectable } from '@nestjs/common';
import { IDataloaders } from './dataloader.interface';
import { RecipeLoader } from './loaders/recipe-loader';

@Injectable()
export class DataloaderService {
  constructor(private readonly recipeLoader: RecipeLoader) {}

  getLoaders(): IDataloaders {
    return {
      recipes: {
        findByIds: this.recipeLoader.findByIds(),
      },
    };
  }
}
