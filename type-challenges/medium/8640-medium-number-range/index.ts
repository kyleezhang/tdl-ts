import type { Equal } from '@type-challenges/utils'

// type Number2Array<N extends number, R extends unknown[] = []> = R['length'] extends N ? R : Number2Array<N, [...R, unknown]>

// export type NumberRange<
//   M extends number,
//   N extends number,
//   MArray extends unknown[] = Number2Array<M>,
//   NArray extends unknown[] = Number2Array<N>,
//   R extends unknown[] = MArray
// > = Equal<R['length'], NArray['length']> extends true ? R['length'] : R['length'] | NumberRange<M, N, MArray, NArray, [...R, unknown]>


export type NumberRange<
    L extends number, 
    H extends number, 
    T extends unknown[] = [], 
    Flag = T['length'] extends L ? true : false, 
    R = never
  > = Flag extends true ? T['length'] extends H ? R | H : NumberRange<L, H, [...T, 1], Flag, R | T['length']> : NumberRange<L, H, [...T, 1]>;