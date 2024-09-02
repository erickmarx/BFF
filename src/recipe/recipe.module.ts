import { Module } from '@nestjs/common';
import { RecipeResolver } from './recipe.resolver';
import { RecipeService } from './recipe.service';
import { APIModule } from '../common/api/api.module';

@Module({ imports: [APIModule], providers: [RecipeResolver, RecipeService], exports: [RecipeService], })
export class RecipeModule {}
