import type { Equal } from '@type-challenges/utils'

export type IndexOf<T extends unknown[], U, P extends unknown[] = []> = T['length'] extends P['length'] ? -1 : Equal<T[P['length']], U> extends true ? P['length'] : IndexOf<T, U, [...P, unknown]>