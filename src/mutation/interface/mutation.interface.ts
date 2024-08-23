export type IMutation<TData, Result> = (
  _parent: any,
  args: TData,
  context: any,
  info: any
) => Result;
