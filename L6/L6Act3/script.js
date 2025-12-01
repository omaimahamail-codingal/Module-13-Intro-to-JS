// This function is called when the form is submitted
function validate(event) {
    
    // Stop page from refreshing
    event.preventDefault();

    // Get values from inputs
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let age = document.getElementById("age").value;

    // Get message box
    let msgBox = document.getElementById("message");

    // Create an empty message
    let message = "";

    // Check if email is empty
    if (email === "") {
        message = "Please enter an email.";
        msgBox.style.color = "red";
    }

    // Check password
    else if (pass === "") {
        message = "Password must be at least 8 characters.";
        msgBox.style.color = "red";
    }

    // Check age
    else if (age === "") {
        message = "Age must be between 12 and 50.";
        msgBox.style.color = "red";
    }

    // If all fields are filled
    else {
        message = "Login successful!";
        msgBox.style.color = "green";
    }

    // Show message
    msgBox.innerText = message;
}
