// 解法一
// type CreateArray<
//   TLength extends number,
//   TData extends unknown[] = []
// > = TData["length"] extends TLength
//   ? TData
//   : CreateArray<TLength, [unknown, ...TData]>;

// type Pop<TArray extends Array<unknown>> = TArray extends [
//   ...infer Rest,
//   unknown
// ]
//   ? Rest
//   : never;

// export type MinusOne<
//   TDigit extends number,
//   TArray extends unknown[] = CreateArray<TDigit>
// > = Pop<TArray>["length"];

// 解法二
export type MinusOne<T extends number> = CountToT<`${T}`> extends [...infer M1, 1] ? M1['length'] : 0

type CountToT<T extends string, Count extends 1[] = []> =
  T extends `${infer First}${infer Rest}` ? (
    CountToT<Rest, N<Count>[keyof N & First]>
  ) : Count

type N<T extends 1[] = []> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T],
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1],
  '2': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1],
  '3': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1],
  '4': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1],
  '5': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1],
  '6': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1],
  '7': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1],
  '8': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1, 1],
  '9': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1, 1, 1],
}