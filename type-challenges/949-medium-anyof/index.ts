type FalseType = '' | 0 | false | [] | { [K: string]: never }

export type AnyOf<T extends unknown[]> = T extends Array<FalseType> ? false : true