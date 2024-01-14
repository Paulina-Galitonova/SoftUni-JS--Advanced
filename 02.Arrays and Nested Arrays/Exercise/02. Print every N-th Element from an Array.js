function printEveryN(array,n){


    let result=[];

    for(let i=0;i<array.length;i+=n){
        result.push(array[i]);

    }

    return result



}
console.log(printEveryN(['dsa',
'asd', 
'test', 
'tset'], 
2
));