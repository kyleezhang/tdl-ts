export type AppendToObject<Obj extends Record<string, unknown>, K extends string, V> = {
    [T in (keyof Obj | K)]: T extends K ? V : Obj[T]
}