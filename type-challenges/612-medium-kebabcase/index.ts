export type KebabCase<S extends string, IsR = false> =
  S extends `${infer F}${infer Rest}`
    ? Uppercase<F> extends Lowercase<F> ?
      `${F}${KebabCase<Rest, true>}`
      : `${Uppercase<F> extends F ? IsR extends true ? '-' : '' : ''}${Uppercase<F> extends F ? Lowercase<F> : F}${KebabCase<Rest, true>}`
    : S;
