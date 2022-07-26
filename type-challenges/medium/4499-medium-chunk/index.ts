// 解法一
// type Number2Array<N extends number, R extends 1[] = []> = R['length'] extends N ? R : Number2Array<N, [...R, 1]>

// type LessOrEqual<M extends number, N extends number> = Number2Array<N> extends [...Number2Array<M>, ...1[]] ? true : false

// type ChunkByNumber<N extends any[], L extends number, R extends any[] = []> = R['length'] extends L ? R : (
//     N extends [infer First, ...infer Rest] ? ChunkByNumber<Rest, L, [...R, First]> : N
// )

// export type Chunk<N extends any[], L extends number> = N['length'] extends 0 ? [] : LessOrEqual<N['length'], L> extends true ? [N] : (
//     N extends [...ChunkByNumber<N, L>, ...infer Rest] ? [ChunkByNumber<N, L>, ...Chunk<Rest, L>] : [N]
// )

// 解法二
export type Chunk<T extends unknown[], N extends number, U extends unknown[] = []> = T extends [infer F, ...infer R] ?
  U['length'] extends N ? [U, ...Chunk<T, N>] : Chunk<R, N, [...U, F]>
: U extends [] ? [] : [U]