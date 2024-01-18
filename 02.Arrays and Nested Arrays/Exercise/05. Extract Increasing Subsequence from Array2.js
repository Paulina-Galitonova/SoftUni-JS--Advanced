function extractIncreasingSubsequence(data){


    let result=[];
    let biggest=data.shift();
    result.push(biggest);

    data.forEach(x=>{
        if(biggest<=x){
            biggest=x;
            result.push(biggest);
        }
    })

    return result;
}


console.log(extractIncreasingSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));