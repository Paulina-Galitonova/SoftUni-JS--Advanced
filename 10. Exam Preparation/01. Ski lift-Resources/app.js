window.addEventListener('load', solve);

function solve() {
    let firstNameSect = document.getElementById("first-name");
    let lastNameSect = document.getElementById("last-name");
    let numberPoopleField = document.getElementById("people-count");
    let fromDateField = document.getElementById("from-date");
    let daysField = document.getElementById("days-count");
    let nextStepBtn = document.getElementById("next-btn");

    let firstName = firstNameSect.value;
    let lastName = lastNameSect.value;
    let people = Number(numberPoopleField.value);
    let date = fromDateField.value;

    const ticketInfoList = document.querySelector(".ticket-info-list");
    const confirmContainer = document.querySelector(".confirm-ticket");

    nextStepBtn.addEventListener("click", nextClick);

    function nextClick(event) {
        event.preventDefault();

        let firstName = firstNameSect.value;
        let lastName = lastNameSect.value;
        let people = numberPoopleField.value;
        let date = fromDateField.value;
        let days = daysField.value;

        if (firstName == "" || lastName == "" || people == "" || date == "" || days == "") {
            return;
        }

        nextStepBtn.parentElement.reset();
        nextStepBtn.disabled = true;

        const result = createTicketPreview(firstName, lastName, people, date, days);
        ticketInfoList.appendChild(result);
    }
    function createTicketPreview(firstName, lastName, people, date, days) {
        let elementLi = document.createElement("li");
        elementLi.className = "ticket";

        let elementArt = document.createElement("article");
        elementArt.innerHTML = `<h3>Name: ${firstName} ${lastName}</h3> <p>From date: ${date}</p> <p>For ${days} days</p><p>For ${people} people</p>`;

        // Append the elementArt to elementLi
        elementLi.appendChild(elementArt);
        //create edit button
        let editBtn=document.createElement("button");
        editBtn.textContent=("Edit")
        editBtn.className="edit-btn";   
        elementLi.appendChild(editBtn);

          //create edit button
          let continueBtn=document.createElement("button");
          continueBtn.textContent=("Continue")
          continueBtn.className="continue-btn";   
          elementLi.appendChild(continueBtn);
          editBtn.addEventListener("click", () => onEditClick(firstName, lastName, date, days, people));
          continueBtn.addEventListener("click", () => onContinue(firstName, lastName, date, days, people));

  

        // Return the elementLi
        return elementLi;
    }

    function onEditClick(firstName, lastName, date, days, people) {
        document.getElementById("first-name").value = firstName;
        document.getElementById("last-name").value = lastName;
        document.getElementById("from-date").value = date;
        document.getElementById("days-count").value = days;
        document.getElementById("people-count").value = people;
        nextStepBtn.disabled = false;
        ticketInfoList.textContent='';
    }
    
    function onContinue(firstName, lastName, date, days, people) {
        ticketInfoList.textContent='';

        let elementLi = document.createElement("li");
        elementLi.className = "ticket-content";
    
        let elementArt = document.createElement("article");
        elementArt.innerHTML = `<h3>Name: ${firstName} ${lastName}</h3> <p>From date: ${date}</p> <p>For ${days} days</p><p>For ${people} people</p>`;
    
        // Append the elementArt to elementLi
        elementLi.appendChild(elementArt);
    
        // Create confirm button
        let confirmBtn = document.createElement("button");
        confirmBtn.textContent = "Confirm";
        confirmBtn.className = "confirm-btn";
        elementLi.appendChild(confirmBtn);
        confirmBtn.addEventListener("click", onConfirm);

    
        // Create cance; button 
        let cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.className = "cancel-btn";
        elementLi.appendChild(cancelBtn);
        cancelBtn.addEventListener("click", () => onCancel(firstName, lastName, date, days, people));
    
        // Append the elementLi to the confirmation container
        confirmContainer.appendChild(elementLi);
    }

    function onCancel(firstName, lastName, date, days, people){
        confirmContainer.textContent = "";
        nextStepBtn.disabled = false;
        }

        function onConfirm(event){
            let main=document.getElementById("main");
            main.style="display:none";
            let body=document.getElementById("body")
            let textEl=document.createElement("h1");
            textEl.id="thank-you";
            textEl.textContent="Thank you, have a nice day!";
            let backBtn=document.createElement("button");
            backBtn.id="back-btn";
            backBtn.textContent="Back"
            body.appendChild(textEl);
            body.appendChild(backBtn);
            backBtn.addEventListener("click", () => window.location.reload());
        }
    
    }
    
