const spy = require('sinon').spy;
const expect = require('chai').expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('Validates the usage of Utils module in sendPaymentRequestAPI', () => {
    const callback = spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(callback.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(callback.calculateNumber.callCount).to.equal(1);
    callback..calculateNumber.restore();
  });
});

