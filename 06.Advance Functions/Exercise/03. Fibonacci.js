function getFibonator(){
    let first=0;
    let second=1;
    return function(){
        let num=first+second;
         first=second;
         second=num;
         return first
        
    }

    
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
