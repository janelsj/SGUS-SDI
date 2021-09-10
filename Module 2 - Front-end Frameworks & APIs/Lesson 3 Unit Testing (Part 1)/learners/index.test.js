// Run `npm install` to install dependencies before writing test code.
const appCode = require('./index');

//This is for mocking an entire external module:
jest.mock("lodash");        //this is hoisted
const _ = require('lodash'); // need to repeat this code from index.js for programme to store in the cache from index.js file.

//Best practice to clear all mocks each time:
afterEach(()=>{
    jest.clearAllMocks();
})

// Part 1 - simple assertions
describe ("sum function", () => {
    it ("should return 7 when arguments are 3 & 4", () => {
        expect(appCode.sum(3,4)).toBe(7);
    })
    test("should return 3 when arguments are 1 & 2", ()=> {
        expect(appCode.sum(1,2)).toBe(3);
    })
})

// Part 2 - mock a function
describe ("numMinusOne function", () => {
    it("should always return 4 when making minusOne return 1", () =>{
    // Console log to see difference between before and after mocking:
    // console.log("before mocking:", appCode.minusOne);
//Mocking minusOne:
    appCode.minusOne = jest.fn().mockReturnValue(1);
    // Console log to see difference between before and after mocking:
    // console.log("after mocking:", appCode.minusOne);
//Test numMinusOne:
        const result = appCode.numMinusOne(1000); // can put any number in here, should not affect the final result, once constant is set through mocking.
        expect(result).toBe(4);
    });
})

// Part 3 - mock a module
describe("rollDice function", () => {
    it ("should always return 4 as we mock external module", () => {
        _.random = jest.fn().mockReturnValue(4);
        expect(appCode.rollDice()).toBe(4);
        expect(appCode.rollDice()).toBe(4);
        expect(appCode.rollDice()).toBe(4);
    })
})

// Part 4 - throw an error
describe("throwAnError function", () => {
    it("should throw error", () => {
        expect(()=>{
            appCode.throwAnError();
        }).toThrow("TEST");
    })
})