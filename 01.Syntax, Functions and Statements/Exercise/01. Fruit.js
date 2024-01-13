function fruit(fruit,weight,price){


    let conventor=weight/1000;
    let money=conventor*price;

    console.log(`I need $${money.toFixed(2)} to buy ${conventor.toFixed(2)} kilograms ${fruit}.`)



} 

fruit('apple', 1563, 2.35)