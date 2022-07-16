type FlattenOnce<T extends any[]> = T extends [infer F, ...infer R]
  ? [...(F extends any[] ? F : [F]), ...FlattenOnce<R>]
  : []

type IsFlatten<T extends any[]> = T extends [infer F, ...infer R]
  ? (
    F extends any[]
    ? false
    : IsFlatten<R>
  )
  : true

export type FlattenDepth<T extends any[], D extends number = 1, Reduce extends any[] = []> =
  IsFlatten<T> extends true
  ? T
  : (
    Reduce['length'] extends D
    ? T
    : FlattenDepth<FlattenOnce<T>, D, [any, ...Reduce]>
  )
