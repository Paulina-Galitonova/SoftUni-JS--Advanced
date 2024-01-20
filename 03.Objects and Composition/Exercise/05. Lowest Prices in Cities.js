function lowestPricesInCities(input) {


    let result = {};

    for (let info of input) {

        let [town, product, price] = info.split(" | ");
        price = Number(price);

        if (product in result) {
            if (result[product].price > price) {
                result[product].price = price;
                result[product].town = town;
            } else {
                continue;
            }

        } else {
            result[product] = { price, town };  

        }
    }

    for (let product in result) {
        console.log(`${product} -> ${result[product].price} (${result[product].town})`)


    }
}







lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',]
);