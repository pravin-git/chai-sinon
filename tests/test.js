const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const controller = require("../src/controller.js");
const repository = require("../src/repository.js");


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
        expect(res.send.calledOnce).to.be.false;
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

describe("Stub tests" , ()=>{
    it("check repository with true", ()=>{
        let req = {}
        
        let res = {
            send: sinon.spy()
        }

        const exists = sinon.stub(repository, "doesUserExist").returns(true);
        controller.getIndexPage(req, res);
        expect(res.send.firstCall.args[0]).to.equal("Pravin");
        exists.restore();
    })
})


describe("Stub tests" , ()=>{
    it("check repository with false", ()=>{
        let req = {}
        
        let res = {
            send: sinon.spy()
        }

        const exists = sinon.stub(repository, "doesUserExist").returns(false);
        controller.getIndexPage(req, res);
        expect(res.send.firstCall.args[0]).to.equal("Pramod");
        exists.restore();
    })
})



/********************Stubs************************/


/********************mocks************************/
/********************mocks************************/