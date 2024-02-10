import { assert } from "chai";

import {lookupChar} from "../07.Exercise Unit Testing and Error Handling/Exercise/03. Char Lookup.js"

describe('lookupChar', () => {
    it('should return the character at the specified index', () => {
        assert.strictEqual(lookupChar('hello', 1), 'e');
        assert.strictEqual(lookupChar('world', 3), 'l');
        assert.strictEqual(lookupChar('test', 0), 't');
    });

    it('should handle incorrect types and return undefined', () => {
        assert.strictEqual(lookupChar(123, 2), undefined);
        assert.strictEqual(lookupChar('string', 'index'), undefined);
        assert.strictEqual(lookupChar(null, 2), undefined);
    });

    it('should return "Incorrect index" for out-of-bounds indices', () => {
        assert.strictEqual(lookupChar('hello', -1), 'Incorrect index');
        assert.strictEqual(lookupChar('world', 10), 'Incorrect index');
        assert.strictEqual(lookupChar('test', 5), 'Incorrect index');
    });

    it('should return undefined for non-string inputs', () => {
        assert.strictEqual(lookupChar(123, 2), undefined);
        assert.strictEqual(lookupChar(null, 2), undefined);
        assert.strictEqual(lookupChar(undefined, 2), undefined);
    });

    it('should return undefined for non-integer indices', () => {
        assert.strictEqual(lookupChar('hello', 'index'), undefined);
        assert.strictEqual(lookupChar('world', 2.5), undefined);
    });
});

//o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.