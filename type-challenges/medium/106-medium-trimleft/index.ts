type Space = ' ' | '\n' | '\t'

export type TrimLeft<T extends string> = T extends `${Space}${infer Rest}` ? TrimLeft<Rest> : T