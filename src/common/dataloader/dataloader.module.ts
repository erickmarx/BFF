import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { RecipeModule } from '../../recipe/recipe.module';

@Module({
  imports: [RecipeModule],
  providers: [DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
