function validatePassword() {
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirm_password").value;
      var errorElement = document.getElementById("password-error");

      if (password !== confirmPassword) {
        errorElement.innerHTML = "Passwords do not match.";
        return false;
      } else {
        errorElement.innerHTML = "";
        return true;
      }
    }

    function validateForm() {
      // Get form inputs
      var name = document.forms["myForm"]["name"].value;
      var email = document.forms["myForm"]["email"].value;
      
      // Check if inputs are empty
      if (name === "") {
        alert("Please enter your name.");
        return false;
      }
      
      if (email === "") {
        alert("Please enter your email.");
        return false;
      }
      
      // Validate email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
    }
