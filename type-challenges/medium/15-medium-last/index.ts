// 我的解法
// export type Last<T extends unknown[]> = T extends [infer P, ...infer U]
//   ? U["length"] extends 0
//     ? P
//     : Last<U>
//   : never;

// 别人的（有点难受） 
export type Last<T extends unknown[]> = T extends [...any, infer U] ? U : never