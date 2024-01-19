function townPopulation(input){

    let citys={};

    for (let info of input){
        let [city,population]=info.split(" <-> ");

        if(citys.hasOwnProperty(city)){
            citys[city]+=Number(population);

        } else{
            citys[city]=Number(population);
        }
    }


    for(const [city,population] of Object.entries(citys)){
        console.log(`${city} : ${population}`);

    }




}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);