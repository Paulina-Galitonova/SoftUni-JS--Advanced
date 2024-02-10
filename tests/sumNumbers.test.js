import { assert } from "chai";

import { sum } from "../07.Exercise Unit Testing and Error Handling/04 sumNumbers.js";



describe("sum function", () => {
    it("should return the sum of numbers in the array", () => {
        assert.equal(sum([1, 2, 3]), 6);
        assert.equal(sum([0, -1, 1]), 0);
        assert.equal(sum([10, 20, 30]), 60);
    });
    it("should handle an array with a single element", () => {
        assert.equal(sum([5]), 5);
    });

    it("should handle an array with non-numeric elements", () => {
        assert.isNaN(sum(["pesho", 2, 3]), NaN);
        assert.isNotNaN(sum(["1", 2, 3]), 6);

       
    });
   
});