import { assert } from "chai";

import { rgbToHexColor } from "../07.Exercise Unit Testing and Error Handling/06. RGB to Hex.js";

describe("rgbToHexColor checker",()=>{
    it("should convert valid RGB values to hexadecimal color",()=>{
        assert.strictEqual(rgbToHexColor(255, 0, 0),"#FF0000")
        assert.strictEqual(rgbToHexColor(0, 255, 0),"#00FF00")
        assert.strictEqual(rgbToHexColor(0, 0, 255),"#0000FF")
        assert.strictEqual(rgbToHexColor(128, 128, 128),"#808080")
    })

it ("invalid inputs",()=>{
    assert.isUndefined(rgbToHexColor(-1, 0, 0));
    assert.isUndefined(rgbToHexColor(256, 0, 0));
    assert.isUndefined(rgbToHexColor(0, -1, 0));
    assert.isUndefined(rgbToHexColor(0, 0, -1));

})

it ("input has string",()=>{
    assert.isUndefined(rgbToHexColor("string", 0, 0));
    assert.isUndefined(rgbToHexColor(256, "string", 0));
    assert.isUndefined(rgbToHexColor(0, -1, "string"));
})

it ("input has array",()=>{
    assert.isUndefined(rgbToHexColor([], 0, 0));
    assert.isUndefined(rgbToHexColor(256, [], 0));
    assert.isUndefined(rgbToHexColor(0, -1, []));
})

it ("input has object",()=>{
    assert.isUndefined(rgbToHexColor({}, 0, 0));
    assert.isUndefined(rgbToHexColor(256, {}, 0));
    assert.isUndefined(rgbToHexColor(0, -1, {}));
})

it ("input is bigger",()=>{
    assert.isUndefined(rgbToHexColor(300, 0, 0));
    assert.isUndefined(rgbToHexColor(256, 400, 0));
    assert.isUndefined(rgbToHexColor(0, -1, 500));
})

it ("input is smaller",()=>{
    assert.isUndefined(rgbToHexColor(-3, 0, 0));
    assert.isUndefined(rgbToHexColor(115, -200, 0));
    assert.isUndefined(rgbToHexColor(0, 56, -56));
})

})


// //•	Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
// •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// •	Return undefined if any of the input parameters are of an invalid type or not in the expected range




