import { TracedRESTDataSource } from '../traced-rest-data-source';

export class ShopAPI extends TracedRESTDataSource {
  baseURL = 'http://localhost:3002';

  async getShop() {
    return await this.get('/shop');
  }
}
