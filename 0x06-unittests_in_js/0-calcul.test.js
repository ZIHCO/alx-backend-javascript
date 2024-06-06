const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  const test = ({ a, b, expected }) =>
    function () {
      const res = calculateNumber(a, b);
      assert.strictEqual(res, expected);
    };
  it('correctly round and adds 2 numbers', test({ a: 8.4, b: 4.7, expected: 13 }));
  it('a is rounded', test({ a: 8.4, b: 1, expected: 9}));
  it('b is rounded', test({ a: 8, b: 1.9, expected: 10}));
  /*it('a is rounded', test({ a: 6.5, b: 11.3, expected: 18}));
  it('a is rounded', test({ a: 8.6, b: 81.5, expected: 91}));*/
});
