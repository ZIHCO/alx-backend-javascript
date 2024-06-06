const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  const test = ({ a, b, expected }) =>
    function () {
      const res = calculateNumber(a, b);
      assert.strictEqual(res, expected);
    };
  it('It should test if the return is the expected value', test({ a: 5.5, b: 4.9, expected: 11 }));
  it('a is rounded', test({ a: 5, b: 5, expected: 10 }));
  it('b is rounded', test({ a: -7.1, b: -7.6, expected: -15 }));
  /*it('It should test if it works for mixed type', test({ a: -7.1, b: 0, expected: -7}));
  it('It should test if it works for mixed type', test({ a: -7.1, b: 7, expected: 0 }));
  it('It should test if the return is of type INT', () => {
    assert.strictEqual(Number.isInteger(calculateNumber(5.5, 4.9)), true);
  });*/
});
