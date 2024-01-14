function rotateArray(array, rotations) {

    for (let i = 0; i < rotations; i++) {
     let last=array.pop();
     array.unshift(last);   
    }

    console.log(array.join(" "));


}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);