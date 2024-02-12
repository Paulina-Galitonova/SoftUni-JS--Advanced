class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    get length() {
        return this.innerLength;
    }

    set length(value) {
        if (value >= 0) {
            this.innerLength = value;
        } else {
            this.innerLength = 0;
        }
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        }

        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else {
            return this.innerString.slice(0, this.innerLength) + '...';
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Output: Test

test.decrease(3);
console.log(test.toString()); // Output: Te...

test.decrease(5);
console.log(test.toString()); // Output: ...

test.increase(4);
console.log(test.toString()); // Output: Test
