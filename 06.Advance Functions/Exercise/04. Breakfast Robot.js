function breakfastRobot() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipe = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function (data) {
        let [action, type, qty] = data.split(" ");
        if (action == "restock") {
            return restock(type, qty);
        } else if (action == "prepare") {
            return prepare(type, qty)
        } else if (action == "report") {
            return print();
        }
    }

    function restock(type, qty) {
        store[type] += Number(qty);
        return ("Success");
    }

    function prepare(type, qty) {
        let prepareRecepi = {};
        for (let [el, value] of Object.entries(recipe[type])) {
            let neededValue = qty * value;
            if (store[el] < neededValue) {
                return(`Error: not enough ${el} in stock`);
            } 
            prepareRecepi[el] = neededValue;

        }
        for (let [el, value] of Object.entries(prepareRecepi)) {
            store[el] -= value;
        }
        return ("Success");
    }

    function print() {
        return (`protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`)
    }
}

//    ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']


let manager = breakfastRobot();
console.log (manager ("prepare turkey 1")); // Success 
console.log (manager ("restock protein 10")); // Error: not enough carbohydrate in stock
console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log (manager ("restock carbohydrate 10")); // Error: not enough carbohydrate in stock
console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log (manager ("restock fat 10")); // Error: not enough carbohydrate in stock
console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log (manager ("restock flavour 10")); // Error: not enough carbohydrate in stock
console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log (manager ("report")); // Error: not enough carbohydrate in stock



