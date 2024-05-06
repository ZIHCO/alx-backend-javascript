const Utils = require('./utils.js');
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('Validates the usage of the Utils function', function () {
    const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyThis = sinon.spy(console);
    sendPaymentRequestToApi(100, 20);
    expect(stubCalculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyThis.log.calledWith("The total is: 10")).to.be.true;
    spyThis.log.restore();
  });
});
