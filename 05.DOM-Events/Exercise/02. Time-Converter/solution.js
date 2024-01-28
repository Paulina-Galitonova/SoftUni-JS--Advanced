function attachEventsListeners() {
    let inputD = document.getElementById("days");
    let inputH = document.getElementById("hours");
    let inputMin = document.getElementById("minutes");
    let inputMSec = document.getElementById("seconds");

    let buttons = Array.from(document.querySelectorAll("input[type='button']"));

    buttons.forEach(button => {
        button.addEventListener("click", convert);
    })

    function convert(event) {
        let currentInput = event.target.parentElement.children[1];
        let input = Number(currentInput.value);
        let unit = currentInput.id;

        switch (unit) {
            case "days":
                inputH.value = input * 24;
                inputMin.value = input * 24 * 60;
                inputMSec.value = input * 24 * 60 * 60;
                break;
            case "hours":
                inputD.value = input / 24;
                inputMin.value = input * 60;
                inputMSec.value = input * 60 * 60;
                break;
            case "minutes":
                inputD.value = input / 24 / 60;
                inputH.value = input / 60;
                inputMSec.value = input * 60;
                break;
            case "seconds":
                inputD.value = input / 24 / 60 / 60;
                inputH.value = input / 60 / 60;
                inputMin.value = input / 60;
                break;
        }
    }
}
