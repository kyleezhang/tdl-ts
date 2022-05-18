export type Chainable<T = unknown> = {
    value: T,
    option<K extends string | number | symbol, V>(key: K extends keyof T ? never : K, value: V): Chainable<{ [P in K | keyof T]:P extends keyof T ? T[P] : V }>,
    get(): T
}