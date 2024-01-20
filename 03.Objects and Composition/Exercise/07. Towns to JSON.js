function townsToJson(input){

    let result=[];
    let heading=input.shift();

    for (let info of input){
        let tokens=info.split("|").map(x=>x.trim()).filter(x=>!!x);
        let town=tokens[0];
        let latitude=Number(tokens[1]).toFixed(2);
        let longitude=Number(tokens[2]).toFixed(2);
        let object={
            Town:town,
            Latitude:Number(latitude),
            Longitude:Number(longitude),
        }
        result.push(object)
        
    }

    let text=JSON.stringify(result);
    console.log(text);



}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);