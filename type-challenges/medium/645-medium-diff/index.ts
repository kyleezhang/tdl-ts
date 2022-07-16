export type Diff<
  A extends Record<string, unknown>,
  B extends Record<string, unknown>
> = {
  [K in Exclude<keyof A | keyof B, keyof A & keyof B>]: K extends keyof A
    ? A[K]
    : K extends keyof B
    ? B[K]
    : never;
};
