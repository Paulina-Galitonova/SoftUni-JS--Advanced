function subSum(arr,start,end){

    if (!Array.isArray(arr)) {
        return NaN;
      } 

      for (let element of arr) {
        if (typeof element !== "number") {
          return NaN;
        }
      }
      if(start<0){
        start=0;
      }
      if(end>arr.length-1){
        end=arr.length-1;
      }

      let newArr=arr.slice(start,end+1);
      let sum=0;
      newArr.forEach(element => {
        sum+=element;
      });
      return sum;
}

console.log(subSum([], 1, 2));