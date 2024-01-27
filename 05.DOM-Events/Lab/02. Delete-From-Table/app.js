function deleteByEmail() {
    //read the input
    let input=document.querySelector('[name="email"]');


    // check the table rows
    
    let rows=Array.from(document.querySelectorAll(`#customers tbody tr`));

    //check the second column for a match 

    let match=false;

    for (let row of rows){
        if(row.children[1].textContent==input.value){
            match=true;
           row.remove();
        }
    }
    
    let resultPlace=document.getElementById("result");
    if(match){
        resultPlace.textContent="Deleted.";
    } else{
        resultPlace.textContent="Not found.";

    }

    //print result messege
}