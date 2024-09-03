import { SubscriptionOptions } from '@nestjs/graphql';

export function DefaultSubscription(
  cb: SubscriptionOptions['filter'],
): SubscriptionOptions {
  return {
    filter: cb,
    resolve: (value) => value,
  };
}
