// 解法一
// type TestNever<T> = T extends 1 ? true : false
// export type IsNever<T> = TestNever<T> extends never ? true : false

// 解法二
export type IsNever<T> = [T] extends [never] ? true : false
