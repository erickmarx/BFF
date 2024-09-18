import { Module } from '@nestjs/common';
import { CartMockController } from './cart/cart-mock.controller';
import { ShopMockController } from './shop/shop-mock.controller';
import { RecipeMockController } from './recipe/recipe-mock.controller';

@Module({
  controllers: [CartMockController, ShopMockController, RecipeMockController],
})
export class MockControllerModule {}
