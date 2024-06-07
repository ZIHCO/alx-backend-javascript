const spy = require('sinon').spy;
const expect = require('chai').expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  const callback = spy(Utils);
  sendPaymentRequestToApi(100, 20);
  expect(callback.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
});
