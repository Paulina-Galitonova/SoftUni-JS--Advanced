function carFactory(order) {

    let enjinesBase = {
        "SmallEngine": { power: 90, volume: 1800 },
        "NormalEngine": { power: 120, volume: 2400 },
        "MonsterEngine": { power: 200, volume: 3500 }
    }

    let newCar = {
        model: order.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined


    };

    if (order.power <= 90) {
        newCar.engine = enjinesBase.SmallEngine;
    } else if (order.power <= 120) {
        newCar.engine = enjinesBase.NormalEngine;
    } else {
        newCar.engine = enjinesBase.MonsterEngine;
    }


    if (order.carriage == "hatchback") {
        newCar.carriage = {
            type: 'hatchback',
            color: order.color
        }
    } else {
        newCar.carriage = {
            type: 'coupe',
            color: order.color
        }
    }


    let weelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    newCar.wheels = Array(4).fill(weelSize);

    // let weels = [];
    // if(order.wheelsize %2 ==0){
    //     order.wheelsize--;
    // }
    // for(let i=0; i<4;i++){
    //     weels.push(order.wheelsize);
    // }

    // newCar.wheels=weels;

    return newCar
}






console.table(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}

));