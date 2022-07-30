export type Subsequence<T extends unknown[]> = T extends [infer F, ...infer R] ? [F, ...Subsequence<R>] | Subsequence<R> : []

type t = Subsequence<[1, 2]>