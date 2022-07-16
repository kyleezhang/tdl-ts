export type Mutable<T extends Readonly<object>> = {
    -readonly [K in keyof T]: T[K]
}