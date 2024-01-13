function cookingNumbers2(numString, ...op) {


    let operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3, 
        fillet: (num) => num * 0.80
    }

    let num = Number(numString);


    op.forEach(el => {
        num = operations[el](num);
        console.log(num);
    }
    )

}

cookingNumbers2('9', 'dice', 'spice', 'chop', 'bake', 'fillet')