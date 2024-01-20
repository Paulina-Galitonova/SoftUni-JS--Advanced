function heroicInventory(input){

    let herosArr=[];

    


    for(let info of input){
        let [name,level,items] = info.split(" / ");
            level=Number(level);

            items= items ? items.split(", ") : [];

        
        

        herosArr.push({name,level,items});
        
    }
    let text=JSON.stringify(herosArr);
    console.log(text);


}

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']
);