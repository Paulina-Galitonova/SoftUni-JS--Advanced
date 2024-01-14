function addRemoveElements(array){

let num=1;
let result=[];

  for (let command of array){
    
    if(command=="add"){
        result.push(num);
    } 
    else if(command =="remove"){
     result.pop();   
    }
    num++;
  }

  if(result.length>0){
    result.forEach(element => {
        console.log(element);
     });
  } else{
    console.log("Empty");
  }

 

}

addRemoveElements(['remove', 
'remove', 
'remove']


);