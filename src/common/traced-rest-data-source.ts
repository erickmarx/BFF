import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';

export class TracedRESTDataSource extends RESTDataSource {
  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers['traceId'] = 'traceId';
  }
}
