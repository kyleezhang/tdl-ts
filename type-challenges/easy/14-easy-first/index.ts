// 解法1
// export type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 解法2
// export type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 解法3
export type First<T extends any[]> = T extends [infer P, ...infer Rest] ? P : never
