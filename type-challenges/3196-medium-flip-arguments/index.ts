import type { Reverse } from "../3192-medium-reverse/index";
export type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer Params
) => infer Result
  ? (...args: Reverse<Params>) => Result
  : never;
