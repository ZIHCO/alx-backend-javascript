const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('It should test if the return is the expected value', () => {
    assert.strictEqual(calculateNumber(5.5, 4.9), 11);
  });
  it('It should test if the return is of type INT', () => {
    assert.strictEqual(Number.isInteger(calculateNumber(5.5, 4.9)), true);
  });
  it('It should test if it works for integers', () => {
    assert.strictEqual(calculateNumber(5, 5), 10);
  });
  it('It should test if it works for 2 negatives', () => {
    assert.strictEqual(calculateNumber(-7.1, -7.6), -15);
  });
  it('It should test if it works for mixed type', () => {
    assert.strictEqual(calculateNumber(-7.1, 0), -7);
  });
  it('It should test if it works for mixed type', () => {
    assert.strictEqual(calculateNumber(-7.1, 7), 0);
  });
});
