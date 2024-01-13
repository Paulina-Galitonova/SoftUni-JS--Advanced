function wordsUppercase(input){

    let newSentance=[];


    let pattern=/(?<words>\w+)/gm;   

    while ((items = pattern.exec(input)) !== null) {
        let word=items.groups["words"];
        let upp=word.toUpperCase();
        newSentance.push(upp);

    }

    console.log(newSentance.join(", "))
}

wordsUppercase('hello')