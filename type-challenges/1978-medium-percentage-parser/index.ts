// 解法一
// export type PercentageParser<S extends string> = S extends `${"+" | "-"}${number}${"%"}` ? 
//   (S extends `${infer F}${infer S}%` ? [F, S, "%"] : never) : (
//     S extends `${"+" | "-"}${number}` ? (
//       S extends `${infer F}${infer S}` ? [F, S, ""] : never
//     ) : (
//       S extends `${number}%` ? (
//         S extends `${infer F}%` ? ["", F, "%"] : never
//       ) : (
//         S extends `${"+" | "-"}` ? (
//           S extends `${infer F}` ? [F, "", ""] : never
//         ) : (
//           S extends "%" ? ["", "", "%"] : S extends `${infer F}` ? ["", F, ""] : never
//         )
//       )
//     )
//   )

// 解法二
export type PercentageParser<
  S extends string,
  Sign extends string = S extends `${'+' | '-'}${string}` ? S extends `${infer T}${string}` ? T : '' : '',
  Unit extends string = S extends `${string}%` ? '%' : ''
> = S extends `${Sign}${infer Value}${Unit}` ? [Sign, Value, Unit] : [Sign, '', Unit]
