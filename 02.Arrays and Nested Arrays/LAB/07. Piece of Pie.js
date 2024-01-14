function pieceOfPie(arr, start, end) {


    let startInx=arr.indexOf(start);
    let endInd=arr.indexOf(end);
    let newArr=arr.slice(startInx,endInd+1);

    return newArr;


}

console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'

));