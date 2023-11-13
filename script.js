function submitForm(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Retrieve form data
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    // You can perform additional validation here

    // Display submitted data (you can modify this part to send the data to Formspree or any other backend)
    alert("Submitted Data:\n" +
        "First Name: " + firstName + "\n" +
        "Middle Name: " + middleName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Email: " + email);
}