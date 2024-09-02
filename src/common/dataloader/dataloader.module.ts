import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { RecipeModule } from '../../recipe/recipe.module';
import { RecipeLoader } from './loaders/recipe-loader';

@Module({
  imports: [RecipeModule],
  providers: [DataloaderService, RecipeLoader],
  exports: [DataloaderService],
})
export class DataloaderModule {}
