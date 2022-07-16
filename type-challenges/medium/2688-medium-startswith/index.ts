// 解法一
// export type StartsWith<Target extends string, S extends string> = S['length'] extends 0 ? true : (
//     Target extends `${infer First}${infer Rest}` ? (
//         S extends `${infer SFirst}${infer SRest}` ? (
//             SFirst extends First ? StartsWith<Rest, SRest> : false
//         ) : true
//     ) : S['length'] extends 0 ? true : false
// )

// 解法二
export type StartsWith<TString, T extends string> = TString extends `${T}${string}` ? true : false