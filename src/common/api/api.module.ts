import { Module } from '@nestjs/common';
import { CartAPI } from './cart-api';
import { ShopAPI } from './shop-api';
import { RecipeAPI } from './recipe-api';

@Module({
  providers: [CartAPI, ShopAPI, RecipeAPI],
  exports: [CartAPI, ShopAPI, RecipeAPI],
})
export class APIModule {}
