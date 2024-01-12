function sumNum(n,m){


    let n1=Number(n);
    let n2=Number(m);
    let sum=0
    for (let i=n1; i<=n2;i++){
        sum+=i;
      
    }

    return sum;

    
}


console.log(sumNum('1', '5'));