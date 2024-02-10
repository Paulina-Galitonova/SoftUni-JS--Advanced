function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
// // Valid Inputs
// console.log(rgbToHexColor(255, 0, 0)); // Expected: "#FF0000"
// console.log(rgbToHexColor(0, 255, 0)); // Expected: "#00FF00"
// console.log(rgbToHexColor(0, 0, 255)); // Expected: "#0000FF"
// console.log(rgbToHexColor(128, 128, 128)); // Expected: "#808080"

// // Invalid Inputs
// console.log(rgbToHexColor(-1, 0, 0)); // Expected: undefined
// console.log(rgbToHexColor(256, 0, 0)); // Expected: undefined
// console.log(rgbToHexColor(0, -1, 0)); // Expected: undefined
// console.log(rgbToHexColor(0, 256, 0)); // Expected: undefined
// console.log(rgbToHexColor(0, 0, -1)); // Expected: undefined
// console.log(rgbToHexColor(0, 0, 256)); // Expected: undefined

// // Invalid Types
// console.log(rgbToHexColor("string", 0, 0)); // Expected: undefined
// console.log(rgbToHexColor(0, [], 0)); // Expected: undefined
// console.log(rgbToHexColor(0, 0, {})); // Expected: undefined

// // Edge Cases
// console.log(rgbToHexColor(0, 0, 0)); // Expected: "#000000"
// console.log(rgbToHexColor(255, 255, 255)); // Expected: "#FFFFFF"


export {
    rgbToHexColor
}