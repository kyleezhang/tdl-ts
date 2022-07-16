type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...(First extends any[] ? First : [First]), ...Flatten<Rest>]
  : T

type IsFlatten<T> = T extends [infer First, ...infer Rest] ? (First extends any[] ? false : IsFlatten<Rest>) : true

export type FlattenDepth<T extends any[], D = 1, Reduce extends any[] = []> = IsFlatten<T> extends true
  ? T
  : Reduce['length'] extends D
  ? T
  : FlattenDepth<Flatten<T>, D, [any, ...Reduce]>

