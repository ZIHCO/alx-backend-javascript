const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  const test = ({ a, b, expected }) =>
    function () {
      const res = calculateNumber(a, b);
      assert.strictEqual(res, expected);
    };
  it('correctly round and adds 2 numbers', test({ a: 8.4, b: 4.7, expected: 13 }));
});
