import type { Equal, Expect } from '@type-challenges/utils'
import type { Reverse } from './index'

type Test = Reverse<['a', 'b']>

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]