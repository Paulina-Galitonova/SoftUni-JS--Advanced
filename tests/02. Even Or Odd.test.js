import { assert } from "chai";

import { isOddOrEven } from "../07.Exercise Unit Testing and Error Handling/Exercise/02. Even Or Odd.js";

describe("Even or Odd Function",()=>{
    it("isOdd text input",()=>{
        assert.equal(isOddOrEven("hello"),"odd");
        assert.equal(isOddOrEven("123"),"odd");
        assert.equal(isOddOrEven("test123"),"odd");

    })

    it("isEven text input",()=>{
        assert.equal(isOddOrEven("hell"),"even")
    })

    it("is Even empty string",()=>{
        assert.equal(isOddOrEven(""),"even");
    })

    it("not a string",()=>{
        assert.equal(isOddOrEven(123),undefined);
        assert.equal(isOddOrEven(null),undefined);
        assert.equal(isOddOrEven(true),undefined);

    })
})



// console.log(isOddOrEven(true));      // Output: undefined
// console.log(isOddOrEven(null));      // Output: undefined
// console.log(isOddOrEven(undefined)); // Output: undefined