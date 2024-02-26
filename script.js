document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('user-pass');
    const confirmPasswordInput = document.getElementById('user-pass-confirm');
    const passwordError = document.getElementById('password-error');

    function checkPasswordsMatch() {
        if (passwordInput.value !== '' && confirmPasswordInput.value !== '' && passwordInput.value !== confirmPasswordInput.value) {
            passwordError.style.display = 'block'; 
            passwordInput.classList.add('error'); 
            confirmPasswordInput.classList.add('error'); 
        } else {
            passwordError.style.display = 'none'; 
            passwordInput.classList.remove('error'); 
            confirmPasswordInput.classList.remove('error'); 
        }
    }

    passwordInput.addEventListener('input', checkPasswordsMatch);
    confirmPasswordInput.addEventListener('input', checkPasswordsMatch);

    checkPasswordsMatch();
});
