function cookingNumbers(number, task1, task2, task3, task4, task5) {

    let n = Number(number);
    let arr = [task1, task2, task3, task4, task5];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == "chop") {
            n = n / 2;
            console.log(n);
        } else if (arr[i] == "dice") {
            n = Math.sqrt(n);
            console.log(n);
        } else if (arr[i] == "spice") {
            n++;
            console.log(n);
        } else if (arr[i] == "bake") {
            n *=3
            console.log(n);
        } else if (arr[i] == "fillet") {
            n = n * 0.8;
            console.log(n.toFixed(1));
        }
    }
}





cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');