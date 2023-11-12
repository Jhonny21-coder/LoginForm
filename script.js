function submitForm(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Retrieve form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;

    // You can perform additional validation here

    // Display submitted data (you can modify this part to send the data to Formspree or any other backend)
    alert("Submitted Data:\n" +
        "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Email: " + email + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Gender: " + gender + "\n" +
        "Address: " + address);
}