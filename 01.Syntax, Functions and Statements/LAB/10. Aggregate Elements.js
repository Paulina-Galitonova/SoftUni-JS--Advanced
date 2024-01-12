function aggregateElements(arr){

    

    //•	Sum(ai) - calculates the sum of all elements from the arr array

    function sumAI(arr){
        let sum=0
        for (let i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        return sum;
    }



    //•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array

    function sumInvers(arr){
        sum=0;  
    for (let i=0; i<arr.length; i++){
        let curr=1/arr[i];
        sum+=curr;
    }
    return sum;
    }

    //•	Concat(ai) - concatenates the string representations of all elements from the array
    
    function concat(arr){
        sum=""; 
    for (let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
    }

    console.log(sumAI(arr));
    console.log(sumInvers(arr));
    console.log(concat(arr));
}
aggregateElements([2, 4, 8, 16])