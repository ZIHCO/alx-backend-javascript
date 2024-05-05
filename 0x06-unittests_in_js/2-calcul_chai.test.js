const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  const test = ({ operator, a, b, expected }) =>
    function () {
      const res = calculateNumber(operator, a, b);
      expect(res).to.equal(expected);
    };
  
  describe('SUM', function () {
    it('correctly round and adds 2 numbers', test({ operator: 'SUM', a: 8.4, b: 4.7, expected: 13 }));
    it('a is rounded', test({ operator: 'SUM', a: 8.4, b: 1, expected: 9 }));
    it('b is rounded', test({ operator: 'SUM', a: 8, b: 1.9, expected: 10 }));
    it('a is rounded', test({ operator: 'SUM', a: 6.5, b: 11.3, expected: 18 }));
    it('a is rounded', test({ operator: 'SUM', a: 8.6, b: 81.5, expected: 91 }));
  });
  describe('SUBTRACT', function () {
    it('correctly round and subtract 2 numbers', test({ operator: 'SUBTRACT', a: 8.4, b: 4.7, expected: 3 }));
    it('a is rounded', test({ operator: 'SUBTRACT', a: 8.4, b: 1, expected: 7 }));
    it('b is rounded', test({ operator: 'SUBTRACT', a: 8, b: 1.9, expected: 6 }));
    it('a is rounded', test({ operator: 'SUBTRACT', a: 6.5, b: 11.3, expected: -4 }));
    it('a is rounded', test({ operator: 'SUBTRACT', a: 8.6, b: 81.5, expected: -73 }));
  });
  describe('DIVIDE', function () {
    it('correctly round and divide 2 numbers', test({ operator: 'DIVIDE', a: 9.4, b: 2.7, expected: 3 }));
    it('correctly round and divide 2 numbers', test({ operator: 'DIVIDE', a: 9.4, b: 0.4, expected: 'Error' }));
    it('a is rounded', test({ operator: 'DIVIDE', a: 8.4, b: 1, expected: 8 }));
    it('b is rounded', test({ operator: 'DIVIDE', a: 8, b: 1.9, expected: 4 }));
    it('a is rounded', test({ operator: 'DIVIDE', a: 6.5, b: 14.3, expected: 0.5 }));
    it('a is rounded', test({ operator: 'DIVIDE', a: 80.6, b: 9.3, expected: 9 }));
  });
});
