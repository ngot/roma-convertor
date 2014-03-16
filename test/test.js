var roma = require("../src");
var assert = require("assert");

describe("roma-convertor", function () {

	it("parse no param throws error", function () {
		assert.throws(roma.parse());
	});

	it("deParse no param throws error", function () {
		assert.throws(roma.deParse());
	});

	for (var i = 0; i < 15000; i++) {
		it(i + " convert", function () {
			assert.equal(i, roma.deParse(roma.parse(i)));
		});
	}

});