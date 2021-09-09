jest.mock("lodash");
const _ = require("lodash");

jest.mock('./index', ()=>({
    ...jest.requireActual("./index"),
    addOne:jest.fn()
}));
const appCode = require("./index");

describe("write test cases in class", ()=>{
    
    // 1. Simple test assertion
    it("should return 2", ()=>{
        const result = appCode.sum(1,1);
        expect(result).toBe(2); // Change toBe(2) to toBe(3) to see it fail.
    });

    // 2. Mock a function
    it("should return 1 as we mock addOne() to always return 1", ()=>{      
        appCode.addOne = jest.fn().mockReturnValue(1); 
        const result = appCode.numPlusOne(1);
        expect(result).toBe(1);
    })

    // 3. Mock an external module
    it("should always return 2 as we will mock the external module of lodash", ()=>{
        _.random = jest.fn().mockReturnValue(2);

        // three times to test that _.random() always return 2.
        expect(appCode.rollDice()).toBe(2);
        expect(appCode.rollDice()).toBe(2);
        expect(appCode.rollDice()).toBe(2);  
    });

    // 4. Expect an error
    it("should throw an error when arguments are strings", () => {
        expect(()=>{
            appCode.sum("a",1);
        }).toThrow("Arguments must be numeric");
    })
});