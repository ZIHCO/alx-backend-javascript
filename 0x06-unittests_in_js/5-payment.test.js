const sendPaymentRequestToAPI = require('./5-payment.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToAPI', function () {
  let spyThis;

  beforeEach(function () {
    if (!spyThis) {
      spyThis = sinon.spy(console);
    }
  });
  afterEach(function () {
    spyThis.log.resetHistory();
  });

  it('Verifies the log message is correct', function () {
    sendPaymentRequestToAPI(100, 20);
    expect(spyThis.log.calledWith('The total is: 120')).to.be.true;
    expect(spyThis.log.callCount).to.equal(1);
  });

  it('Verifies the log message is correct', function () {
    sendPaymentRequestToAPI(10, 10);
    expect(spyThis.log.calledWith('The total is: 20')).to.be.true;
    expect(spyThis.log.callCount).to.equal(1);
  });
});
