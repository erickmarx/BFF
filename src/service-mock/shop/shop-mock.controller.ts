import { Controller, Get } from '@nestjs/common';

@Controller('shop')
export class ShopMockController {

  @Get()
  getShop() {
    return {
      id: '1',
      name: 'Shop 1',
      description: 'Shop 1 Description',
    };
  }
}
