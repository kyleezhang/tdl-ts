type LeftConcat<B extends string, E extends string[]> = E['length'] extends 0 ? B : {
    [K in E[number]]: `${B}__${K}`
  }[E[number]]

export type BEM<B extends string, E extends string[], M extends string[]> = M['length'] extends 0 ? LeftConcat<B, E> : {
    [K in M[number]]: `${LeftConcat<B, E>}--${K}`
}[M[number]]