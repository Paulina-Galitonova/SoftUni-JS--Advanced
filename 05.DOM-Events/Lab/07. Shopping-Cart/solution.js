    function solve() {


        // Select the textarea that will display the cart content
        let textarea = document.querySelector("textarea");

        // Select all buttons with class 'add-product' and convert the NodeList to an array
        let addButtonsArr = Array.from(document.querySelectorAll(".add-product"));

        // Initialize an array to store unique product names and a variable to track the total price
        let products = [];
        let totalPrice = 0;


        // Add event listeners to each 'Add' button
        addButtonsArr.forEach(addButton => {
            addButton.addEventListener("click", addtoList)
        })


        // Event handler for the 'Add' button click
        function addtoList(event) {
            // Get the product name and price from the clicked button's parent element
            let productInfo = event.target.parentNode.parentNode;
            let productName = productInfo.querySelector('.product-details > .product-title').textContent;
            let productPrice = Number(productInfo.querySelector('.product-line-price').textContent);
            // If the product is not already in the list, add it; otherwise, skip

            if (!products.includes(productName)) {
                products.push(productName);
            }

            // Update the total price

            totalPrice += productPrice;
            // Display the added product in the textarea

            textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;


        }



        // Add event listener to the 'Checkout' button
            // Display the final message with the list of unique products and total price

        let checkoutButton=document.querySelector(".checkout");
        checkoutButton.addEventListener("click",function(){
            textarea.value+=`You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`
            // Disable all 'Add' buttons after checkout
        addButtonsArr.forEach(addButton => {
            addButton.disabled=true;
        })
            this.disabled=true;
        })
    

    


    


    }