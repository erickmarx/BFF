import { Module } from '@nestjs/common';
import { RecipeResolver } from './recipe.resolver';
import { RecipeService } from './recipe.service';
import { APIModule } from '../../common/api/api.module';
import { RecipeSubscriptions } from './recipe.subscriptions';

@Module({
  imports: [APIModule],
  providers: [RecipeResolver, RecipeSubscriptions, RecipeService],
  exports: [RecipeService],
})
export class RecipeModule {}
