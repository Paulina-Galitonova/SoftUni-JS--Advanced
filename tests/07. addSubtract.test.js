import { assert } from "chai";

import {createCalculator} from "../07.Exercise Unit Testing and Error Handling/LAB/07. addSubtract.js"

describe("createCalculator function", () => {
    it("should return an object with add, subtract, and get functions", () => {
        const calculator = createCalculator();
        assert.isObject(calculator);
        assert.isFunction(calculator.add);
        assert.isFunction(calculator.subtract);
        assert.isFunction(calculator.get);
    });

    it("should keep an internal sum that can't be modified from the outside", () => {
        const calculator = createCalculator();
        assert.isUndefined(calculator.value); // Ensure 'value' is not accessible directly

        calculator.add(5);
        assert.strictEqual(calculator.get(), 5);

        calculator.subtract(3);
        assert.strictEqual(calculator.get(), 2);
    });
    it("should handle adding and subtracting numbers or strings containing numbers", () => {
        const calculator = createCalculator();
        calculator.add(5);
        assert.strictEqual(calculator.get(), 5);
    
        calculator.subtract("3");
        assert.strictEqual(calculator.get(), 2);
    
        calculator.add("10");
        assert.strictEqual(calculator.get(), 12);
    
        calculator.subtract("abc"); // Invalid input, should be ignored
        assert.isNaN(calculator.get()); // Expecting NaN for invalid input
    });
    
    it("should return the correct internal sum when calling the get() function", () => {
        const calculator = createCalculator();
        assert.strictEqual(calculator.get(), 0);

        calculator.add(5);
        assert.strictEqual(calculator.get(), 5);

        calculator.subtract(3);
        assert.strictEqual(calculator.get(), 2);
    });
});