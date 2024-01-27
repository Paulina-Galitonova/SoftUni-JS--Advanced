function addItem() {
    // Вземаме елемента за въвеждане на данни от полето с идентификатор "newItemText"
    let input = document.getElementById("newItemText");

    // Проверяваме дали въведената стойност е празна
    if (input.value.length === 0) {
        return; // Ако е празна, спираме функцията
    }

    // Създаваме нов елемент за списъка - li
    let liElement = document.createElement("li");
    
    // Задаваме текстовата стойност на li елемента с въведената стойност от полето
    liElement.textContent = input.value;

    // Създаваме бутон за изтриване (a елемент)
    let deleteButton = document.createElement("a");
    deleteButton.textContent = "[Delete]";
    deleteButton.href = "#";

    // Добавяме слушател за събитие, така че при клик върху бутона, ще се изпълни функцията deleteMe
    deleteButton.addEventListener("click", deleteMe);

    // Добавяме бутона за изтриване към li елемента
    liElement.appendChild(deleteButton);

    // Вземаме списъка, в който искаме да добавим новия елемент
    let list = document.getElementById("items");

    // Добавяме новия li елемент към списъка
    list.appendChild(liElement);

    // Изчистваме въведената стойност в полето
    input.value = "";

    // Функцията deleteMe, която ще се изпълни при изтриване
    function deleteMe(event) {
        // Вземаме бутона за изтриване, който предизвика събитието
        const deleteButton = event.target;

        // Вземаме родителя на бутона, който е li елемента
        const liElement = deleteButton.parentElement;

        // Премахваме li елемента от DOM дървото
        liElement.remove();
    }
}
