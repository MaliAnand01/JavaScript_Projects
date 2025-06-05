const password = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');
const eyeIcon = document.getElementById('eye-icon');

password.addEventListener('input', () => {
    const passwordValue = password.value;
    let strengthScore = 0;

    if (passwordValue.length > 0) {
        msg.style.display = 'block';
        password.classList.remove('enter-password');
    } else {
        msg.style.display = 'none';
        str.innerHTML = '';
        password.classList.remove('weak-password', 'medium-password', 'strong-password');
        msg.classList.remove('weak-text', 'medium-text', 'strong-text');
        return; // Exit if password is empty
    }

    // Add points for length
    if (passwordValue.length >= 8) strengthScore += 1;
    if (passwordValue.length >= 12) strengthScore += 1;

    // Check for character types
    const hasLowercase = /[a-z]/.test(passwordValue);
    const hasUppercase = /[A-Z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordValue);

    if (hasLowercase) strengthScore += 1;
    if (hasUppercase) strengthScore += 1;
    if (hasNumber) strengthScore += 1;
    if (hasSymbol) strengthScore += 1;

    // Reset classes
    password.classList.remove('weak-password', 'medium-password', 'strong-password');
    msg.classList.remove('weak-text', 'medium-text', 'strong-text');

    if (strengthScore <= 2) {
        str.innerHTML = '👎weak';
        password.classList.add('weak-password');
        msg.classList.add('weak-text');
    } else if (strengthScore <= 4) {
        str.innerHTML = '👍medium';
        password.classList.add('medium-password');
        msg.classList.add('medium-text');
    } else {
        str.innerHTML = '💪strong';
        password.classList.add('strong-password');
        msg.classList.add('strong-text');
    }
});


eyeIcon.onclick = function () {
    if (password.value.length == 0) {
        msg.style.display = 'block';
        str.innerHTML = '👆Enter';
        msg.classList.add('enter-text');
        password.classList.add('enter-password');

    } else {
        if (password.type == "password") {
            password.type = "text";
            eyeIcon.classList.remove('fa-eye-slash')
            eyeIcon.classList.add('fa-eye')
            eyeIcon.setAttribute('title', 'Hide Password')
        } else {
            password.type = "password";
            eyeIcon.classList.add('fa-eye-slash')
            eyeIcon.classList.remove('fa-eye')
            eyeIcon.setAttribute('title', 'Show Password')
        }
    }
}