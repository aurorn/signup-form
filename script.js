document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('user-pass');
    const confirmPasswordInput = document.getElementById('user-pass-confirm');
    const passwordError = document.getElementById('password-error');

    function checkPasswordsMatch() {
        if (passwordInput.value !== '' && confirmPasswordInput.value !== '' && passwordInput.value !== confirmPasswordInput.value) {
            passwordError.style.display = 'block'; // Display error message if passwords don't match and password is not empty
            passwordInput.classList.add('error'); // Add error class to highlight the input
            confirmPasswordInput.classList.add('error'); // Add error class to highlight the input
        } else {
            passwordError.style.display = 'none'; // Hide error message
            passwordInput.classList.remove('error'); // Remove error class
            confirmPasswordInput.classList.remove('error'); // Remove error class
        }
    }

    // Call checkPasswordsMatch whenever either password input changes
    passwordInput.addEventListener('input', checkPasswordsMatch);
    confirmPasswordInput.addEventListener('input', checkPasswordsMatch);
});
