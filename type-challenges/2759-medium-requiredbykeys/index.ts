type Merge<T> = {
    [K in keyof T]: T[K]
}

export type RequiredByKeys<T, K = keyof T> = Merge<{
    [K1 in keyof T as K1 extends K ? K1 : never]-?: T[K1]
} & {
    [K2 in Exclude<keyof T, K>]?: T[K2]
}>