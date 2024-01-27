function focused() {
    //Write a function that highlights the currently active section of a document. There will be multiple divs with input fields inside them. Set the class of the div that contains the currently focused input field to "focused". When the focus is lost (blurred), remove the class from the element.

    let divs = document.querySelectorAll('div');
    for (let div of divs) {
        let input = div.querySelector('input');

        input.addEventListener('focus', () => {
            div.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            div.classList.remove('focused');
        });
    }
    
}