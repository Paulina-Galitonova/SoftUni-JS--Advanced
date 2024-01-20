function catalogue(input){


    let productObj={};

    for (let products of input){
    
        let tokens=products.split(" : ");
        let name=tokens[0];
        let price=Number(tokens[1]);
        let initial=name[0];

        if(!productObj[initial]){
            productObj[initial]=[];
        }

        productObj[initial].push({name,price})
        //  storage.push(productObj);
    }
    let sortedInitials = Object.keys(productObj).sort();
    for (let initial of sortedInitials) {
        console.log(initial);

        productObj[initial].sort((a, b) => a.name.localeCompare(b.name)).forEach(productObj => {
            console.log(`  ${productObj.name}: ${productObj.price}`);
        });
    }
}


catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    );