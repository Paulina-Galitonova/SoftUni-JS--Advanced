function solve() {
    // Selecting DOM elements
    const formRef = document.querySelector("form");
    const [addTask, openTask, inProgress, compleate] = document.querySelectorAll("section");

    // Enum to handle button actions
    btnHandlerEnum = {
        // Handler for "Start" button
        start: function (e) {
            // Get the current article
            let currentArticle = e.target.parentElement.parentElement;
            
            // Remove the button container
            removeBtn(e.target.parentElement);
            
            // Add "Finish" and "Delete" buttons
            currentArticle.innerHTML += getBtnPartial({ classes: "red", text: "Delete" }, { classes: "orange", text: "Finish" });
            
            // Get buttons in the current article
            let btns = currentArticle.querySelectorAll("button");
            
            // Add event listener to the buttons
            addEventListenerToButton(btns);
            
            // Move the article to "In Progress" section
            inProgress.children[1].appendChild(currentArticle);
        },
        // Handler for "Finish" button
        finish: function (e) {
            // Get the current article
            let currentArticle = e.target.parentElement.parentElement;
            
            // Remove the button container
            removeBtn(e.target.parentElement);
            
            // Move the article to "Complete" section
            compleate.children[1].appendChild(currentArticle);
        },
        // Handler for "Delete" button
        delete: function (e) {
            // Remove the parent article
            e.target.parentElement.parentElement.remove();
        }
    }

    // Event listener for form submission
    formRef.addEventListener("submit", onSubmitHandler);

    // Handle form submission
    function onSubmitHandler(e) {
        e.preventDefault();
        // Get form elements
        let formElements = e.target.elements
        let taskName = formElements[0].value;
        let taskDescr = formElements[1].value;
        let taskDate = formElements[2].value

        // Check if any input is empty
        if (!taskName || !taskDescr || !taskDate) {
            return;
        }

        // Create and append a new article
        createArticle(taskName, taskDescr, taskDate);
        
        // Clear the form
        claerForm(formElements);
    }

    // Clear form input values
    function claerForm(formElements){
        formElements[0].value="";
        formElements[1].value="";
        formElements[2].value="";
    }

    // Create and append a new article
    function createArticle(name, descr, taskDate) {
        // Create a new article element
        let newArticle = document.createElement("article");
        
        // Set the inner HTML of the article
        newArticle.innerHTML = getArticleTemp(name, descr, taskDate);
        
        // Append the new article to "Open" section
        openTask.children[1].appendChild(newArticle);  

        // Get buttons in the new article
        let btns = newArticle.querySelectorAll("button");
        
        // Add event listener to the buttons
        addEventListenerToButton(btns)
    }

    // Handle button click events
    function clickHandler(e){
        // Get the action based on button text
        let currentAction=e.target.innerText.toLowerCase();
        
        // Call the corresponding handler
        btnHandlerEnum[currentAction](e)
    }

    // Add event listener to buttons
    function addEventListenerToButton(btns){
        // Convert NodeList to array and add event listener to each button
        Array.from(btns).forEach(btn=>btn.addEventListener("click",clickHandler))
    }

    // Generate HTML for a task article
    function getArticleTemp(name, descrop, date) {
        return `<h3>${name}</h3>`+
        `<p>Description: ${descrop}</p>` +
        `<p>Due Date: ${date}</p>` +
        getBtnPartial({ classes:"green",text:"Start" }, { classes:"red",text:"Delete" })
    }

    // Generate HTML for buttons
    function getBtnPartial(btn1,btn2){
        return `<div class ="flex">` +
        `<button class=${btn1.classes}>${btn1.text}</button>`+
        `<button class=${btn2.classes}>${btn2.text}</button>`+
        `</div>`
    }

    // Remove button container from an article
    function removeBtn(target){
        target.remove();
    }
}
