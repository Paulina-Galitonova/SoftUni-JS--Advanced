function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

console.log(isOddOrEven("world"));  // Output: "even"
console.log(isOddOrEven("hell"));  // Output: "odd"

export{
    isOddOrEven
}
