// Mock credentials for demonstration
const mockCredentials = {
  username: "test@gmail.com",
  password: "12345678"
};

// Enhanced login functionality with checks for empty fields and credential validation
document.getElementById('loginButton').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get user input
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Ensure both username and password fields are filled
  if (username && password) {
      // Check credentials
      if (username === mockCredentials.username && password === mockCredentials.password) {
          alert('התחברות בוצעה'); // "Login successful" message in Hebrew
          // Redirect to another page, for example, 'dashboard.html'
          window.location.href = 'dashboard.html';
      } else {
          alert('שם משתמש או סיסמה שגויים'); // "Incorrect username or password" message in Hebrew
      }
  } else {
      alert('אנא מלא את כל השדות'); // "Please fill in all fields" message in Hebrew
  }
});

// Function to handle forgot password click
function handleForgotPassword() {
  alert('Redirecting to password reset page...');
  // Redirect to password reset page, for example, 'resetPassword.html'
  window.location.href = 'resetPassword.html';
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('forgotPassword').addEventListener('click', handleForgotPassword);
});
