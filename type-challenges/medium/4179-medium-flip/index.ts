export type Flip<T extends Record<PropertyKey, any>> = {
    [K in keyof T as T[K] extends PropertyKey ? T[K] : `${T[K]}`]: K
}