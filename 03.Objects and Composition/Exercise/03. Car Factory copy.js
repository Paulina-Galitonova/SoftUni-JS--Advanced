function carFactory(order) {

    const engines = {
        '90': { power: 90, volume: 1800 },
        '120': { power: 120, volume: 2400 },
        '200': { power: 200, volume: 3500 }
    };

    const newCar = {
        model: order.model,
        engine: engines[order.power <= 90 ? '90' : order.power <= 120 ? '120' : '200'],
        carriage: { type: order.carriage === 'hatchback' ? 'hatchback' : 'coupe', color: order.color },
        wheels: Array(4).fill(Math.floor(Math.max(1, order.wheelsize - (order.wheelsize % 2))))

    };

    return newCar;
    }


 



console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

));