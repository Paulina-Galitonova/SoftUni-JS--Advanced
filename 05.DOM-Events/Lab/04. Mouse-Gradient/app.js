function attachGradientEvents() {
  //Write a program that detects and displays how far along a gradient the user has moved their mouse. The result should be rounded down and displayed as a percentage inside the <div> with id "result". 

    // Get the element with the id "gradient"

  let gradient=document.getElementById("gradient");

  // Add an event listener for the "mousemove" event, which is triggered when the mouse moves over the gradient
gradient.addEventListener("mousemove",gradientMove);


// Add an event listener for the "mouseout" event, which is triggered when the mouse leaves the gradient

gradient.addEventListener("mouseout",gradientOut);

    // Function to handle the mouse movement over the gradient

   function gradientMove(event){
// Get the width of the gradient box

    const gradientBoxWidth = event.target.clientWidth;

 // Calculate the position of the mouse relative to the gradient width
    const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
  // Calculate the percentage based on the mouse position
    const percentage = Math.trunc(positionOfTheMouse * 100);
            // Set the text content of the element with id "result" to the calculated percentage
            
    document.getElementById("result").textContent = percentage + "%";
    
   }

                // Function to handle the mouse leaving the gradient

   function gradientOut(){
            // Set the text content of the element with id "result" to an empty string

    document.getElementById('result').textContent = "";
}

}