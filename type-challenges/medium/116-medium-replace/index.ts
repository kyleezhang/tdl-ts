export type Replace<
  S extends string,
  A extends string,
  B extends string
> = A extends ""
  ? S
  : S extends `${infer Left}${A}${infer Right}`
  ? `${Left}${B}${Right}`
  : S;
