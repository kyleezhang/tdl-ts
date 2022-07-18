export type Fibonacci<
  T extends number,
  R extends 1[] = [],
  U1 extends 1[] = [],
  U2 extends 1[] = []
> = R["length"] extends T
  ? [...U1, ...U2]["length"]
  : R["length"] extends 0 | 1
  ? Fibonacci<T, [...R, 1], [], [1]>
  : Fibonacci<T, [...R, 1], U2, [...U1, ...U2]>;
