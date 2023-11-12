document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          showSuccessMessage();
        } else {
          showError();
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showError();
      });
  });

  function showSuccessMessage() {
    // You can customize this part to show a success message to the user
    alert('Form submitted successfully!');
    form.reset(); // Optional: Clear the form after successful submission
  }

  function showError() {
    // You can customize this part to show an error message to the user
    alert('An error occurred. Please try again later.');
  }
});
