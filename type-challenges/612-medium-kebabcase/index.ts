export type KebabCase<S extends string, isR = false> = S extends `${infer F}${infer Rest}` ? (
    Uppercase<F> extends Lowercase<F> ?
    `${F}${KebabCase<Rest, true>}`
    : `${Uppercase<F> extends F ? isR extends true ? '-' : '' : ''}${Uppercase<F> extends F ? Lowercase<F> : F}${KebabCase<Rest, true>}`
) : S
