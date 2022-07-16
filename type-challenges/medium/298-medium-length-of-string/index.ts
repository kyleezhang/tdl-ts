// 解法一
// export type LengthOfString<S extends string, L extends any[] = []> = S extends '' ? L['length'] : (
//     S extends `${infer F}${infer Rest}` ? LengthOfString<Rest, [...L, F]> : L['length']
// )

// 解法二
type StringToArray<S extends string, A extends string[] = []> = S extends `${infer F}${infer Rest}` ? StringToArray<Rest, [...A, F]> : A
export type LengthOfString<S extends string> = StringToArray<S>['length']
