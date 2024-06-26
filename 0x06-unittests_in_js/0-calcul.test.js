const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  const test = ({ a, b, expected }) =>
    function () {
      const res = calculateNumber(a, b);
      assert.strictEqual(res, expected);
    };
  it('correctly round and adds 2 numbers', test({ a: 5.5, b: 4.9, expected: 11 }));
  it('a is rounded', test({ a: 5.9, b: 5, expected: 11 }));
  it('b is rounded', test({ a: -7, b: -7.6, expected: -15 }));
  it('It should test if it works for mixed type', test({ a: -7.1, b: 0.9, expected: -6}));
  it('It should test if it works for mixed type', test({ a: 7.4, b: 7.9, expected: 15 }));
  it('It should test if the return is of type INT', () => {
    assert.strictEqual(Number.isInteger(calculateNumber(5.5, 4.9)), true);
  });
});
