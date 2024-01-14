function processOddPositions(arr){

    let newArr=arr.filter((_,i) => i%2 !==0).map(x=>x*2).reverse().join(" ");
    return newArr;








}

console.log(processOddPositions([3, 0, 10, 4, 7, 3]));