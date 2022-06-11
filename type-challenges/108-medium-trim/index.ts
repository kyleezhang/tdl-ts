type Space = ' ' | '\n' | '\t'

export type Trim<T extends string> = T extends `${Space}${infer Right}` ? Trim<Right> : T extends `${infer Left}${Space}` ? Trim<Left> : T