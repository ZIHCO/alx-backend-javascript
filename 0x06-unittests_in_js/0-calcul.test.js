const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('It should test if the return is expected', () => {
    assert.equal(calculateNumber(5.5, 4.9), 11);
  });
  it('It should test if the return is of type INT', () => {
    assert.equal(Number.isInteger(calculateNumber(5.5, 4.9)), true);
  });
});
