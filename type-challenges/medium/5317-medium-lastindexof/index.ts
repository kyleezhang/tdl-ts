import type { Equal } from '@type-challenges/utils'

// 解法一
// export type LastIndexOf<T extends unknown[], U, R extends unknown[] = T> = R['length'] extends 0 ?
//   Equal<T[0], U> extends true ? 0 : -1
// : Equal<T[R['length']], U> extends true ? R['length'] :
//   R extends [unknown, ...infer Rest] ? LastIndexOf<T, U, Rest> : LastIndexOf<T, U, []> 

// 解法二
// answer one
// export type LastIndexOf<T extends unknown[], U, P extends unknown[] = [], R extends number = -1> = Equal<P['length'], T['length']> extends true ? R :
//   Equal<T[P['length']], U> extends true ? LastIndexOf<T, U, [...P, 1], P['length']> : LastIndexOf<T, U, [...P, 1], R>;

// 解法三
export type LastIndexOf<T, U> = T extends [...infer Rest, infer L] ? Equal<L, U> extends true ? Rest['length'] : LastIndexOf<Rest, U> : -1;
