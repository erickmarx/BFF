import { Injectable, NotFoundException } from '@nestjs/common';
import { Recipe } from './recipe.schema';
import { CreateRecipeDTO } from './dto/create-recipe.dto';
import { FilterDTO } from './dto/filter.dto';
import { IngredientsAPI } from '../common/api/ingredients-api';
import { ShopAPI } from '../common/api/shop-api';

const recipeMock: Recipe[] = [
  {
    id: '1',
    title: 'Recipe 1',
    description: 'Description 1',
    creationDate: new Date(),
    ingredients: [
      { name: 'Flour', quantity: 1 },
      { name: 'Sugar', quantity: 1 },
      { name: 'Butter', quantity: 1 },
    ],
  },
  {
    id: '2',
    title: 'Recipe 2',
    description: 'Description 2',
    creationDate: new Date(),
    ingredients: [
      { name: 'Flour', quantity: 1 },
      { name: 'Sugar', quantity: 1 },
      { name: 'Butter', quantity: 1 },
    ],
  },
];

@Injectable()
export class RecipeService {
  constructor(
    private ingredientsAPI: IngredientsAPI,
    private shopAPI: ShopAPI,
  ) {}

  async findOneById(id: string): Promise<Recipe> {
    return recipeMock.find((recipe) => recipe.id === id);
  }

  async findAll(filter?: FilterDTO): Promise<Recipe[]> {
    return recipeMock;
  }

  async findByIds(ids: string[]): Promise<Recipe[]> {
    return recipeMock.filter((recipe) => ids.includes(recipe.id));
  }

  async create(recipe: CreateRecipeDTO): Promise<Recipe> {
    const data = {
      ...recipe,
      id: (recipeMock.length + 1).toString(),
      creationDate: new Date(),
    };

    recipeMock.push(data);

    console.log(data);

    return data;
  }

  async update(id: string, recipe: CreateRecipeDTO): Promise<Recipe> {
    const index = recipeMock.findIndex((recipe) => recipe.id === id);

    if (index < 0) {
      throw new NotFoundException();
    }

    recipeMock[index] = {
      ...recipeMock[index],
      ...recipe,
    };

    return recipeMock[index];
  }

  async remove(id: string): Promise<boolean> {
    const index = recipeMock.findIndex((recipe) => recipe.id === id);

    if (index < 0) {
      throw new NotFoundException();
    }

    recipeMock.splice(index, 1);

    return true;
  }
}
