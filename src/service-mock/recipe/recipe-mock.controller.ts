import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { IRecipe } from './interface/recipe.interface';
import { FilterDTO } from '../../common/dto/filter.dto';
import { ICreateRecipeDTO } from './interface/create-recipe-dto.interface';
import { Request } from 'express';

const recipeMock: IRecipe[] = [
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

@Controller('recipe')
export class RecipeMockController {
  @Get(':id')
  async findOneById(@Param('id') id: string, @Req() req: Request): Promise<IRecipe> {
    console.log(id);
    return recipeMock.find((recipe) => recipe.id === id);
  }

  @Get()
  async findAll(filter?: FilterDTO): Promise<IRecipe[]> {
    return recipeMock;
  }

  @Post()
  async create(@Body() recipe: ICreateRecipeDTO): Promise<IRecipe> {
    const data = {
      ...recipe,
      id: (recipeMock.length + 1).toString(),
      creationDate: new Date(),
    };

    recipeMock.push(data);

    console.log(data);

    return data;
  }

  @Put(':id')
  async update(id: string, recipe: ICreateRecipeDTO): Promise<IRecipe> {
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

  @Delete(':id')
  async remove(id: string): Promise<boolean> {
    const index = recipeMock.findIndex((recipe) => recipe.id === id);

    if (index < 0) {
      throw new NotFoundException();
    }

    recipeMock.splice(index, 1);

    return true;
  }
}
