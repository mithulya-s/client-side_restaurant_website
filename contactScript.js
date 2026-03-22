//selectin the form element within the contact form
const form=document.querySelector(".contactForm form");
//selecting the name input field
const nameField=document.getElementById("name");
const messageField=document.getElementById("msgInDet");

//event listener for handling submission
form.addEventListener("submit", function(event){

    //putting an errors flag to track if there's any errros
    let gotError=false;

    //clearing prev alerts highlighting after proper submission
    nameField.style.border="";
    messageField.style.border="";

    //validating the name field to not be empty
    if (nameField.value.trim() === "") {
        alert("Please enter name."); //displaying the error message
        nameField.style.border = "1px solid red";  //error msg styling for the name
        hasError = true;
    }

    //validating the message box to check if it's empty
    if (messageField.value.trim() === "") {
        alert("Message field cannot be empty.Please enter details.");
        messageField.style.border = "1px solid red"; // Highlight the field with an error
        hasError = true;//setting the flag to true 
    }

    //preventing form submission if there were any errors
    if(gotError){
        event.preventDefault(); //stopping the form from submission if errors are visible by stopping form's default behaviour
    }
});