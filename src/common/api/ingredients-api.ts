import { TracedRESTDataSource } from '../traced-rest-data-source';

export class IngredientsAPI extends TracedRESTDataSource {
  baseURL = 'http://localhost:3001';

  async getIngredients() {
    return await this.get('/ingredients');
  }
}
