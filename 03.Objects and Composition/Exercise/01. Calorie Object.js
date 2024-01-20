function calorieObject (input){

    
let list ={};

for (let i=0;i<=input.length-1; i+=2){

    let name=input[i];
    let calories=input[i+1];

    list[name]=Number(calories);
    }


    console.log(list);



}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])