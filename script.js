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

    // Now, you can send the form data to Formspree using the form's natural submission process
    // The form's action attribute is set to Formspree's endpoint, so no need for additional steps here
}