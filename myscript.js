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
