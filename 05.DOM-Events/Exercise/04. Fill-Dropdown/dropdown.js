function addItem() {
    let textInput = document.getElementById("newItemText");
    let valueInput = document.getElementById("newItemValue");
    let option = document.getElementById("menu");


    let optionEl = document.createElement("option");
    optionEl.textContent = textInput.value;
    optionEl.value = valueInput.value;
    option.appendChild(optionEl);


    textInput.value = "";
    valueInput.value = "";
}