const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const controller = require("../src/controller.js");


const user = {
    addUser: (name) =>{
        console.log('I am in');
        this.name = name;
    }
}
/********************Spies************************/
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


describe("getIndexPage", () =>{
    it("should return index page", () =>{
        let req = {}
        let res = {
            send: function() {}
        }
        controller.getIndexPage(req, res);
    })
})

describe("getIndexPage with spy", () =>{
    it("should return index page with sinon spy", () =>{
        let req = {}
        let res = {
            send: sinon.spy()
        }
        controller.getIndexPage(req, res);
        console.log(res.send);
        expect(res.send.calledOnce).to.be.true;
        expect(res.send.firstCall.args[0]).to.equal("Pravin");
    })
})

describe("User tests" , ()=>{
    it("should add a user", ()=>{
        sinon.spy(user, "addUser");
        console.log(user.addUser);
        user.addUser('Pravin');
        expect(user.addUser.calledOnce).to.be.true;
    })
})
/********************Spies************************/

/********************Stubs************************/
/********************Stubs************************/


/********************mocks************************/
/********************mocks************************/