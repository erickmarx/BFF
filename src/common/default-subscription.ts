import { SubscriptionOptions } from '@nestjs/graphql';

export function FilterSubscription(
  cb: SubscriptionOptions['filter'],
): SubscriptionOptions {
  return {
    filter: cb,
    resolve: (value) => value,
  };
}
