function solution(num) {
    return function add5(num5) {
        let result = num + num5;
        return result;
    }

}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

