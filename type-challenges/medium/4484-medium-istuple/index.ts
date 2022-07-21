export type IsTuple<T> = [T] extends [never] ? false : T extends (unknown[] | readonly unknown[]) ? (
    T['length'] extends number ? (
        number extends T['length'] ? false : true
    ) : false
) : false
