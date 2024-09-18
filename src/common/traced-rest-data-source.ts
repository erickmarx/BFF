import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';

export class TracedRESTDataSource extends RESTDataSource {
  
  // override baseURL: string;
  // constructor(baseURL: string) {
  //   super();
  //   this.baseURL = baseURL;
  // }
  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers['traceId'] = 'traceId';
  }
}
