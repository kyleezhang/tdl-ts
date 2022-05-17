export type DeepReadonly<T extends Record<string, any>> = {
  readonly [K in keyof T]: T[K] extends Record<string, any>
    ? T[K] extends (...args: any[]) => any
      ? T[K]
      : DeepReadonly<T[K]>
    : T[K];
};
