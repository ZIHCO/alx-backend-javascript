const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  const test = ({ type, a, b, expected }) =>
    function () {
      const res = calculateNumber(type, a, b);
      assert.strictEqual(res, expected);
    };

  /* Testcase for subtract */
  it('correctly round and adds 2 numbers', test({ type: 'SUBTRACT', a: 5.5, b: 4.9, expected: 1 }));
  it('a is rounded', test({ type: 'SUBTRACT', a: 5.9, b: 5, expected: 1 }));
  it('b is rounded', test({ type: 'SUBTRACT', a: -7, b: -7.6, expected: 1 }));
  it('It should test if it works for mixed type', test({ type: 'SUBTRACT', a: -7.1, b: 0.9, expected: -8}));
  /*it('It should test if it works for mixed type', test({ type: 'SUBTRACT', a: 7.4, b: 7.9, expected: -1 }));*/

  /* Testcases for division */
  it('correctly round and adds 2 numbers', test({ type: 'DIVIDE', a: 5.5, b: 4.9, expected: 1.2 }));
  it('a is rounded', test({ type: 'DIVIDE', a: 5.9, b: 5, expected: 1.2 }));
  it('b is rounded', test({ type: 'DIVIDE', a: -7, b: -7.4, expected: 1 }));
  it('zero divisor', test({ type: 'DIVIDE', a: -7.1, b: 0.9, expected: -7}));
  it('It should test if it works for mixed type', test({ type: 'DIVIDE', a: 16.4, b: 7.9, expected: 2 }));
  it('test if it throws an Error', () => {
    assert.throws(() => calculateNumber('DIVIDE', 5.5, 0.4), Error, 'Error');
  });
});
