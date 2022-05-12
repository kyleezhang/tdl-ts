type IsEqual<X, Y> = (<T>() => T extends X ? true : false) extends <
  T
>() => T extends Y ? true : false
  ? true
  : false;

export type Includes<T extends unknown[], Y> = T extends [infer K, ...infer U]
  ? IsEqual<Y, K> extends true
    ? true
    : Includes<U, Y>
  : false;
