import { APIConfig } from '../config/api';
import { TracedRESTDataSource } from '../traced-rest-data-source';

export class ShopAPI extends TracedRESTDataSource {
  baseURL = APIConfig.shop.baseURL;

  async getShop() {
    return await this.get(APIConfig.shop.endpoint);
  }
}
