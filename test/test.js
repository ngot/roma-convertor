var roma = require("../src");
var assert = require("assert");

describe("roma-convertor", function(){

	describe("one", function(){	

		it("1 to I", function(){
			assert.equal('I', roma.parse(1));
		});

		it("I to 1", function(){
			assert.equal(1, roma.deParse("I"));
		});	

		it("5 to V", function(){
			assert.equal('V', roma.parse(5));
		});

		it("V to 5", function(){
			assert.equal(5, roma.deParse("V"));
		});	

		it("10 to X", function(){
			assert.equal('X', roma.parse(10));
		});

		it("X to 10", function(){
			assert.equal(10, roma.deParse("X"));
		});	

		it("50 to L", function(){
			assert.equal('L', roma.parse(50));
		});

		it("L to 50", function(){
			assert.equal(50, roma.deParse("L"));
		});	

		it("100 to C", function(){
			assert.equal('C', roma.parse(100));
		});

		it("C to 100", function(){
			assert.equal(100, roma.deParse("C"));
		});	

		it("500 to D", function(){
			assert.equal('D', roma.parse(500));
		});

		it("D to 500", function(){
			assert.equal(500, roma.deParse("D"));
		});	

		it("1000 to M", function(){
			assert.equal('M', roma.parse(1000));
		});

		it("M to 1000", function(){
			assert.equal(1000, roma.deParse("M"));
		});	

	});

});