function validate() {

    // Event listener setup
    // Attach the 'change' event listener to the email input, and call the validateEmail function when the event occurs
    debugger
    let emaiInput = document.getElementById("email");
    emaiInput.addEventListener("change", validateEmail);


    // Function to validate the email
    function validateEmail() {
        // Get the current value of the email input and convert it to lowercase
        let currentEmail = emaiInput.value.toLowerCase();

        // Define a regular expression for a valid email format
        const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        // Check if the entered email matches the valid format
        // If not valid, add the 'error' class to the email input
        // If valid, remove the 'error' class from the email input
        if (!currentEmail.match(emailRegex)) {
            emaiInput.classList.add("error");
        

        } else {
            emaiInput.classList.remove("error");

        }


        

    }











}
