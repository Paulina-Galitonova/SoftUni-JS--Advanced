function sortArrayCriteria(words) {
   
    words.sort((a,b)=>a.length-b.length ||a.localeCompare(b) )
    console.log(words.join(" \n"))
}

sortArrayCriteria(['Deny',
    'omen',
    'test',
    'Default',]
);