export type AppendArgument<F extends (...args: any[]) => any, P> = F extends (
  ...args: infer K
) => infer V
  ? (...args: [...K, P]) => V
  : never;
