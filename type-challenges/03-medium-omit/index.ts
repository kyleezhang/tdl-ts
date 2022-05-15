export type MyOmit<T extends {[key: string]: any}, U extends keyof T> = {
    [K in Exclude<keyof T, U>]: T[K]
}