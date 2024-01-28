function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));


    buttons.forEach(button => {
        button.addEventListener("click", showMore);
    })


    function showMore(event) {
        let buttonTarget = event.currentTarget;
        let profile = buttonTarget.parentElement;
        let checkButtonsArr = Array.from(profile.querySelectorAll("input[type='radio']"));
        let unlock = checkButtonsArr[1];
        let div = profile.querySelector("div");
        if (unlock.checked && buttonTarget.textContent === "Show more") {
            div.style = "display:block";
            buttonTarget.textContent = "Hide it";
        } else if (unlock.checked && buttonTarget.textContent === "Hide it") {
            div.style = "display:none";
            buttonTarget.textContent = "Show more";
        }

    }





}

