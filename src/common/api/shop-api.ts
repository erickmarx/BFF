import { Injectable } from '@nestjs/common';
import { API_CONFIG } from '../config/api';
import { TracedRESTDataSource } from '../traced-rest-data-source';

@Injectable()
export class ShopAPI extends TracedRESTDataSource {
  override baseURL = API_CONFIG.shop.baseURL;

  // async getShop() {
  //   return await this.get(API_CONFIG.shop.endpoint);
  // }
}
