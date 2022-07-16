// 解法一
// type StringToUnionNoEmpty<S extends string, O = {}> = S extends '' ? O[keyof O] : (
//     S extends `${infer First}${infer Rest}` ? StringToUnionNoEmpty<Rest, {
//         [K in (keyof O | First)]: K
//     }> : O[keyof O]
// )

// export type StringToUnion<S extends string> = S extends '' ? never : StringToUnionNoEmpty<S>

// 解法二
export type StringToUnion<T extends string> = T extends `${infer L}${infer R}` ? [ L , StringToUnion<R>  ][number] : never