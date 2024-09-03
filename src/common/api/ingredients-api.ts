import { APIConfig } from '../config/api';
import { TracedRESTDataSource } from '../traced-rest-data-source';

export class IngredientsAPI extends TracedRESTDataSource {
  baseURL = APIConfig.ingredients.baseURL;

  async getIngredients() {
    return await this.get(APIConfig.ingredients.endpoint);
  }
}
