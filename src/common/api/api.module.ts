import { Module } from '@nestjs/common';
import { IngredientsAPI } from './ingredients-api';
import { ShopAPI } from './shop-api';

@Module({
  providers: [IngredientsAPI, ShopAPI],
  exports: [IngredientsAPI, ShopAPI],
})
export class APIModule {}
