function sendResetLink(event) {
    event.preventDefault(); // Prevent form submission
    // var email = document.getElementById("email").value;
    // // Validate the email address here
    // // Generate a random token and store it in the database
    // var token = generateToken();
    // storeTokenInDatabase(email, token);
    // // Send the password reset link to the user's email address
    // var resetLink = "https://example.com/reset_password.html?email=" + encodeURIComponent(email) + "&token=" + encodeURIComponent(token);
    // sendResetLinkToEmail(email, resetLink);
    // Redirect the user to a confirmation page
    alert("Reset Link Sent")
    window.location.href = "D:/Capstone Project/Capstone-Project-Frontend/login/index.html";
  }
  
//   function generateToken() {
//     // Generate a random string of characters here
//     return "abcdef123456";
//   }
  
//   function storeTokenInDatabase(email, token) {
//     // Store the token in the database here
//   }
  
//   function sendResetLinkToEmail(email, resetLink) {
//     // Send the reset link to the user's email address here
//   }