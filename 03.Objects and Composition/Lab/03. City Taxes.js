function cityTaxes(name, population, tresury) {

    let city = {

        name: name,
        population: population,
        treasury: tresury,
        taxRate: 10,

        collectTaxes() {
            this.treasury +=( this.population * this.taxRate);
        },

        applyGrowth(percentige) {
            this.population += Math.floor(this.population * percentige / 100);
        },

        applyRecession(percentige){
            this.treasury-=Math.floor(this.treasury * percentige/100);
        }
    }

    return city;

}



const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);
