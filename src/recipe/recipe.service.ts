import { Injectable, NotFoundException } from '@nestjs/common';
import { Recipe } from './recipe.schema';
import { CreateRecipeDTO } from './dto/create-recipe.dto';
import { FilterDTO } from './dto/filter.dto';

const recipeMock: Recipe[] = [
  {
    id: '1',
    title: 'Recipe 1',
    description: 'Description 1',
    creationDate: new Date(),
    ingredients: ['Flour', 'Sugar', 'Butter'],
  },
  {
    id: '2',
    title: 'Recipe 2',
    description: 'Description 2',
    creationDate: new Date(),
    ingredients: ['Flour', 'Sugar', 'Butter'],
  },
];

@Injectable()
export class RecipeService {
  async findOneById(id: string): Promise<Recipe> {
    return recipeMock.find((recipe) => recipe.id === id);
  }

  async findAll(filter: FilterDTO): Promise<Recipe[]> {
    return recipeMock;
  }

  async create(recipe: CreateRecipeDTO): Promise<Recipe> {
    const data = {
      ...recipe,
      id: (recipeMock.length + 1).toString(),
      creationDate: new Date(),
    };

    recipeMock.push(data);

    console.log(data)

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
