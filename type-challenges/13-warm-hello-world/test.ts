import type { Equal, Expect, NotAny } from '@type-challenges/utils'
import { HelloWorld } from './index'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]