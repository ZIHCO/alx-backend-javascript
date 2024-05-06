const Utils = require("./utils.js");
const spy = require("sinon").spy;
const expect = require("chai").expect;
const sendPaymentRequestToApi = require("./3-payment.js");

describe("sendPaymentRequestToApi", function () {
	it("Validates the usage of the Utils function", function () {
		const spyThis = spy(Utils);
		sendPaymentRequestToApi(100, 20);
		expect(spyThis.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
		expect(spyThis.calculateNumber.callCount).to.equal(1);
		//spyThis.calculatorNumber.restore();
	});
});
