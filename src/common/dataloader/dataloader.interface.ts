import DataLoader from 'dataloader';
import { Recipe } from '../../recipe/recipe.schema';

export interface IDataloaders {
  recipes: {
    findByIds: DataLoader<string, Recipe>;
  };
}
