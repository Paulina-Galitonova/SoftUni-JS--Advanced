function addItem() {


    //take the input
    let input = document.getElementById("newItemText").value;

    //take the list from the page
    let list = document.getElementById("items");

    //create new element with value from the input
    let liElement = document.createElement("li");
    liElement.textContent = input;

    //add the new bullet to the list
    list.appendChild(liElement);

    //clean the input
    document.getElementById("newItemText").value="";


}