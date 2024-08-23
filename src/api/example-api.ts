import { RESTDataSource } from "@apollo/datasource-rest";

export class ExampleAPI extends RESTDataSource {
  override baseURL: string = "http://localhost:3000/api/v1/";

  async getHealth() {
    const value = await this.get("");
    console.log(value);
    return value;
  }
}
