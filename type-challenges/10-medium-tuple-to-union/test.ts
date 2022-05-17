import type { Equal, Expect } from '@type-challenges/utils'
import type { TupleToUnion } from './index'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]