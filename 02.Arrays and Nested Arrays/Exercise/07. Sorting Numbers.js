function sortingNumbers(array){


    let result=[];

    array.sort((a,b)=>a-b);


    while(array.length>0){
        let first=array.shift();
        result.push(first);
        let last=array.pop();
        result.push(last);
    }
  return result;


}


sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);