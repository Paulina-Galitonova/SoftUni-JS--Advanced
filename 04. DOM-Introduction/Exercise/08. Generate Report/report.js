function generateReport() {
    // Set a breakpoint for debugging purposes

    
    // Select the HTML element with the id 'output' and store it in the variable 'output'
    let output = document.querySelector('#output');

    // Select all the checkbox input elements within the table header
    let boxes = document.querySelectorAll('thead tr th input');

    // Select all the rows within the table body
    let info = document.querySelectorAll('tbody tr');

    // Initialize an empty array to store the result of the report
    let result = [];

    // Loop through each row in the table body
    for (let i = 0; i < info.length; i++) {
        // Create an empty object to store information about the current row
        let report = {};

        // Loop through each checkbox in the table header
        for (let j = 0; j < boxes.length; j++) {
            // Check if the current checkbox is checked
            if (boxes[j].checked) {
                // Assign the text content of the corresponding cell in the current row to the object property
                report[boxes[j].name] = info[i].children[j].textContent;
            }
        }

        // Add the report object to the result array
        result.push(report);
    }

    // Convert the result array to a JSON string and set it as the text content of the 'output' element
    output.textContent = JSON.stringify(result);
}
