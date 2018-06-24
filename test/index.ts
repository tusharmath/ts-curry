import * as assert from "assert";
import { curry4 } from "../";
import { describe, it } from "mocha";
import { curry2 } from "../index";

describe("curry4", () => {
  it("should return a curried function", () => {
    const fn = (a: string, b: string, c: string, d: string) =>
      [a, b, c, d].join("");
    const curried4 = curry4(fn);

    // 4
    assert.strictEqual(curried4("a", "b", "c", "d"), "abcd");

    // 1 3
    assert.strictEqual(curried4("a", "b", "c")("d"), "abcd");
    // 3 1
    assert.strictEqual(curried4("a")("b", "c", "d"), "abcd");

    // 2 2
    assert.strictEqual(curried4("a", "b")("c", "d"), "abcd");

    // 1 2 1
    assert.strictEqual(curried4("a")("b", "c")("d"), "abcd");
    // 1 1 2
    assert.strictEqual(curried4("a")("b")("c", "d"), "abcd");
    // 2 1 1
    assert.strictEqual(curried4("a", "b")("c")("d"), "abcd");

    // 1 1 1 1
    assert.strictEqual(curried4("a")("b")("c")("d"), "abcd");
  });

  it("tsc error", () => {
    const fn = curry2((a: string, b: Date) => parseInt(a) + b.getDay());
    fn("10", new Date());
    fn("10")(new Date());
  });
});
