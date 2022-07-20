type Number2Array<N extends number, A extends unknown[] = []> = A['length'] extends N ? A : Number2Array<N, [...A, unknown]>

export type GreaterThan<M extends number, N extends number> = Number2Array<N> extends [...Number2Array<M>, ...unknown[]] ? false : true