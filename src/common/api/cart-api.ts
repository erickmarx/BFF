import { Injectable } from '@nestjs/common';
import { API_CONFIG } from '../config/api';
import { TracedRESTDataSource } from '../traced-rest-data-source';

@Injectable()
export class CartAPI extends TracedRESTDataSource {
  override baseURL = API_CONFIG.cart.baseURL;

  // async getCart() {
  //   return await this.get(API_CONFIG.cart.endpoint);
  // }
}
