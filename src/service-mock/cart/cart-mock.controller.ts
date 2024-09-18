import { Controller, Get } from '@nestjs/common';

@Controller('cart')
export class CartMockController {
  @Get()
  getCart() {
    return {
      id: '1',
      name: 'Cart 1',
      description: 'Cart 1 Description',
    };
  }
}
