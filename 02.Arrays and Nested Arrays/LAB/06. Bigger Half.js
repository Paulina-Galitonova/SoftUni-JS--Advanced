function biggerHalf(arr){
    
    let sorted=arr.sort((a, b) => a - b);
    let half=arr.length/2

    if (arr.length %2 !==0){
        half=Math.ceil(half);

    } 
   

    

    let newArr=arr.slice(-half);

        return newArr;




}

biggerHalf([4, 7, 2, 5]);