import * as assert from 'assert'
import { curry4 } from '../'

describe('curry4', () => {
  it('should return a curried function', () => {
    const fn = (a: string, b: string, c: string, d: string) =>
      [a, b, c, d].join('')
    const curried4 = curry4(fn)

    // 4
    assert.equal(curried4('a', 'b', 'c', 'd'), 'abcd')

    // 1 3
    assert.equal(curried4('a', 'b', 'c')('d'), 'abcd')
    // 3 1
    assert.equal(curried4('a')('b', 'c', 'd'), 'abcd')

    // 2 2
    assert.equal(curried4('a', 'b')('c', 'd'), 'abcd')

    // 1 2 1
    assert.equal(curried4('a')('b', 'c')('d'), 'abcd')
    // 1 1 2
    assert.equal(curried4('a')('b')('c', 'd'), 'abcd')
    // 2 1 1
    assert.equal(curried4('a', 'b')('c')('d'), 'abcd')

    // 1 1 1 1
    assert.equal(curried4('a')('b')('c')('d'), 'abcd')
  })
})
