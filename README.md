# ts-curry [![Build Status](https://travis-ci.com/tusharmath/ts-curry.svg?branch=master)](https://travis-ci.com/tusharmath/ts-curry)

Currying utility for typescript.

# Usage

The module supports functions of upto the arity of `4` via — `curry2` `curry3` `curry4`. For functions having a higher arity its better to refactor the function into smaller functions of lower arity.

```ts
import {curry2} from 'ts-curry'

const func = (a: number, b: Date) => a + b.getDay()
const curried = curry2(func)
curried(2, new Date())
curried(2)(new Date())
```
