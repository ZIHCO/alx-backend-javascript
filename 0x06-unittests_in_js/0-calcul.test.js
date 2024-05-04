const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  const test = ({ a, b, expected }) =>
    function () {
      const res = calculateNumber(a, b);
      assert.strictEqual(res, expected);
    };
  it('correctly round and adds 2 numbers', test({ a: 8.4, b: 4.7, expected: 13 }));
  const a = 8.4;
  const b = 4.7;
  describe('#Math.round()', function () {
    it('a can be rounded', () => {
      assert.strictEqual(Math.round(a), 8);
    });
  });
  describe('#Math.round()', function () {
    it('b can be rounded', () => {
      assert.strictEqual(Math.round(b), 5);
    });
  })
});
