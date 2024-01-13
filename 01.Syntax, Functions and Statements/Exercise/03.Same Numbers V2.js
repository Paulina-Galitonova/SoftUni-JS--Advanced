function sameNumbersV2(num){

    let isSame=true;
    let sum=0;

    num.toString()
    .split("")
    .map((x,i, self)=>{
        if(x !==self[0]){
            isSame=false;
        }
        return sum += Number(x);
    })

console.log(isSame);
console.log(sum);

}
sameNumbersV2(2222222);
sameNumbersV2(1234)