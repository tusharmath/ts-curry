/**
 * Created by tushar on 24/06/18
 */

import {CurriedFunction2, curry2} from '../index'

// test for curry
const fn = curry2((a: string, b: Date) => parseInt(a) + b.getDay())
fn('10', new Date())
fn('10')(new Date())

// test for handling generics
declare type Reducer = CurriedFunction2<number, Date, Date>
declare function genericFunction<Value, State>(
  ...t: Array<{(a: Value, b: State): State}>
): CurriedFunction2<Value, State, State>
declare const r0: Reducer
declare const r1: Reducer

// should compile
const curried: Reducer = genericFunction(r0, r1)
