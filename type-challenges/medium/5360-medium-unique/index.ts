import type { Equal } from '@type-challenges/utils'

type Includes<T extends unknown[], U> = T extends [infer F, ...infer R] ? Equal<F, U> extends true ? true : Includes<R, U> : false

export type Unique<T extends unknown[], U extends unknown[] = []> = T extends [infer F, ...infer R] ? Includes<U, F> extends true ? Unique<R, U> : Unique<R, [...U, F]> : U