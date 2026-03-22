document.addEventListener("DOMContentLoaded", () => {
    //function to calculate the total price in real time
    function calculateTotal(){
        const quantities=document.querySelectorAll(".quantity") //selecting all the input queries for item quantities
        let total=0;//initializing th estarting price as zero

        quantities.forEach(item=>{
            let quantity=parseInt(item.value) || 0; //parse the input value or setting it to zero of empty
            
            if(quantity<0){
                quantity=0;//reset negative numbers to zero 
                item.value=0;//updating input to show change, restricting user of entering negatives.
            }
            
    
            const price=parseFloat(item.dataset.price); //getting the price from data attributes 
            total +=quantity*price; //doing the calculation for each item
        });

        //updating the 'total' display with the users choice
        const totalDisplay=document.getElementById("total");
        if(totalDisplay){
        totalDisplay.textContent = `Rs. ${total.toFixed(2)}`;; //getting the total to show at the bottom of page
        }

    }

    //adding event listeners to all quantity boxes to calculate the total with users choice
    const quantities=document.querySelectorAll(".quantity");
    quantities.forEach(item=>{
        item.addEventListener("input", calculateTotal); //triggering the re-calculation for each input change. 
    });

    calculateTotal();//performing the initial total calculation


    function deliveryToggle() {
        // Fetching the elements using their IDs
        const pickup = document.getElementById("pickup");//retrieve the pickup radio 
        const delivery = document.getElementById("delivery"); //getting the delivery radio
        const adressSection = document.getElementById("adSection"); //getting the delivery adress section
    
        // Ensuring that the elements exist in the DOM
        if (!pickup || !delivery || !adressSection) {
            console.error("One or more elements (pickup, delivery, adSection) are missing in the DOM.");
            return; 
        }
    
        // Function to toggle the delivery details visibility only if its chosen
        function toggleDetailsDown() {
            console.log("toggleDetailsDown triggered!"); 
    
            if (delivery.checked) {
                adressSection.style.display = "block"; //show the details
                console.log("Delivery selected: showing address section.");
            } else {
                adressSection.style.display = "none"; // Hiding the details
                console.log("Pickup selected: hiding address section.");
            }
        }
    
        // Adding event listeners to the radio buttons
        pickup.addEventListener("change", toggleDetailsDown);
        delivery.addEventListener("change", toggleDetailsDown);
    
        // Initial check when the page loads to set the correct state
        toggleDetailsDown(); 
    }
    
    // Invoke the function
    deliveryToggle();

    //Function to validate the date
    function validateDate(){
        const dateFeild=document.getElementById("deliveryDate");
        if(!dateFeild){
            return;
        }

        dateFeild.addEventListener("input", function(event){
            const value=event.target.value;//retriving the input value
            const reg=/^\d{4}-\d{2}-\d{2}$/;//regex to match with the user input

            if (!reg.test(value)) {
                event.target.style.borderColor = "red"; // Highlighting invalid input
            } else {
                event.target.style.borderColor = "";//no highlightign for valid input 
                console.log("valid date");
            }
        });

    }


    // Function to validate the fields
    function validatingFields() {
        const name = document.getElementById("name"); //getting name field
        const contact = document.getElementById("tel");//retrieve contact number field
        const terms = document.getElementById("terms");// Retrieve the terms checkbox
        const pickup = document.getElementById("pickup");// Retrieve the pickup radio button
        const delivery = document.getElementById("delivery");// Retrieve the delivery radio button

        let errors = []; // Initialize an empty array for holding the errors

        // Validating the name field so that it’s not empty and contains only letters and spaces
        let isNameValid = true;
        const nameVal = name.value.trim();

        if (!nameVal) {
            errors.push("Name is required.");//error message for empty name
            name.style.borderColor = "red";//highlight the name field for errors
        } else {
            for (let i = 0; i < nameVal.length; i++) {
                const charac = nameVal[i];
                if (!((charac >= 'A' && charac <= 'Z') || (charac >= 'a' && charac <= 'z') || charac === ' ')) {
                    isNameValid = false;
                    break;
                }
            }
            if (!isNameValid) {
                errors.push("Name can only contain letters and spaces.");
                name.style.borderColor = "red";//error field highlighting 
            } else {
                name.style.borderColor = "";
            }
        }

        // Validating the contact number to only have 10 digits and not be empty
        const contVal = contact.value.trim();
        let isContValid = true;
        if (!contVal) {
            errors.push("Contact number is mandatory.");
            contact.style.borderColor = "red";
        } else {
            if (contVal.length !== 10) {
                isContValid = false;
            }
            for (let i = 0; i < contVal.length; i++) {
                const charac = contVal[i];
                if (!(charac >= '0' && charac <= '9')) { 
                    isContValid = false;
                    break;
                }
            }
            if (!isContValid) {
                errors.push("Contact number must contain exactly 10 digits and only numbers.");
                contact.style.borderColor = "red";
            } else {
                contact.style.borderColor = "";
            }
        }

        // Checking to make sure that either of the delivery methods is selected
        if (!pickup.checked && !delivery.checked) {
            errors.push("Please select a delivery method.");
            console.log("neither option is selected");
        }
        else{
            console.log(`Delivery method selected: ${delivery.checked ? "Delivery" : "Pickup"}`);
        }

        // Checkbox validation to prevent the page from submitting if not clicked
        if (!terms.checked) {
            errors.push("You must agree to the conditions provided at the form's end."); //adding the error for unchecked checkbox
        }

        // Display the error messages or allowing page submission
        if (errors.length > 0) {
            alert(errors.join("\n")); //showing the stored errors to the user
            return false; // Preventing submission if there are errors
        }
        return true; // Allowing the form submission
    }

    //validation logic for submit button
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", (event) => {
            // Perform validation
            const isFormValid = validatingFields(); //perform form validation

            if (!isFormValid) {
                // Prevent submission if validation fails
                event.preventDefault();
                alert("Please correct the highlighted errors before submitting.");
            } else {
                window.location.href="thankYou.html"

            }
                
        });
    }
});