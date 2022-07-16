export type MyReadonly2<T extends {[key: string]: any}, U extends keyof T = keyof T> = {
    readonly  [K in keyof T]: T[K]
} & {
    [K in Exclude<keyof T, U>]: T[K]
}