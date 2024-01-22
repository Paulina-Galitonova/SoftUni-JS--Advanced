function colorize() {
    let elements = document.getElementsByTagName('tr');
    let arr=Array.from(elements);

    for(let i=1; i< arr.length; i+=2){
        let row=arr[i];
        row.style.backgroundColor="Teal";
}

}