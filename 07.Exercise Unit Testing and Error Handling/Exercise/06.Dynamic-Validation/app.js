function validate() {
    let inputField = document.getElementById("email");

    inputField.addEventListener("change", onChange)


    function onChange(e) {
        let emailReg = /\w+[@]\w+[.]\w+/gm
        let email = e.target.value
        if (emailReg.test(email)) {
            e.target.classList.remove("error");
        } else {
            e.target.classList.add("error");

        }



    }
}