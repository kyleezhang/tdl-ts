type Space = ' ' | '\n' | '\t'

export type TrimRight<S extends string> = S extends `${infer Rest}${Space}` ? TrimRight<Rest> : S