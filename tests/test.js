const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;

describe("smoke test", function () {
    it("checks equality", function () {
        assert.equal(true, true);
    });
});

describe("smoke test with chai", function () {
    it("checks equality", function () {
        expect(true).to.be.true;
    });
});