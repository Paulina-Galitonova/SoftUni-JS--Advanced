function createFormatter(separator, symbol, symbolFirst, formatter) {
    // Return a new function that partially applies the fixed parameters
    return function (value) {
        // Call the formatter function with the fixed parameters and the provided value
        return formatter(separator, symbol, symbolFirst, value);
    };
}
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

// Example of usage:
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

// Now, dollarFormatter is a function that takes a single parameter (value) and formats it
console.log(dollarFormatter(5345));   // Output: $ 5345,00
console.log(dollarFormatter(3.1429)); // Output: $ 3,14
console.log(dollarFormatter(2.709));  // Output: $ 2,71
