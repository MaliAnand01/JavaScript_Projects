document.addEventListener('DOMContentLoaded', function () {

    // Pupup dom elements
    const submitBtn = document.querySelector('#submit-btn');
    const okBtn = document.querySelector('#okBtn');
    const popup = document.querySelector('#popup');
    const overlay = document.querySelector('.overlay');

    // form error DOM elements
    const nameError = document.getElementById('name-error')
    const phoneError = document.getElementById('phone-error')
    const emailError = document.getElementById('email-error')
    const messageError = document.getElementById('message-error')
    const submitError = document.getElementById('submit-error')

    // Form input elements
    const contactName = document.getElementById('contact-name')
    const contactPhone = document.getElementById('contact-phone')
    const contactEmail = document.getElementById('contact-email')
    const contactMessage = document.getElementById('contact-message')


    function validateName() {
        let name = contactName.value.trim();

        if (name.length == 0) {
            nameError.innerHTML = 'Required';
            return false;
        }
        if (!name.match(/^[A-Za-z\s.'-]+$/)) {
            nameError.innerHTML = 'Invalid chars';
            return false;
        }
        if (name.length < 3) {
            nameError.innerHTML = 'Too short';
            return false;
        }
        if (!name.includes(' ')) {
            nameError.innerHTML = 'Full name needed';
            return false;
        }

        nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }

    function validatePhone() {
        let phone = contactPhone.value.trim();

        if (phone.length == 0) {
            phoneError.innerHTML = 'Required';
            return false;
        }
        if (!phone.match(/^[0-9]+$/)) {
            phoneError.innerHTML = 'Digits only';
            return false;
        }
        if (phone.length !== 10) {
            phoneError.innerHTML = '10 digits needed';
            return false;
        }

        phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }

    function validateEmail() {
        let email = contactEmail.value.trim();

        if (email.length == 0) {
            emailError.innerHTML = 'Required';
            return false;
        }
        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            emailError.innerHTML = 'Invalid email';
            return false;
        }

        emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }

    function validateMessage() {
        let message = contactMessage.value;
        let requiredChars = 20;
        let leftChars = requiredChars - message.length;

        if (leftChars > 0) {
            messageError.innerHTML = leftChars + ' more characters required';
            return false;
        }

        messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }

    function validateForm(event) {
        let isValid = true;


        if (!validateName()) isValid = false;
        if (!validatePhone()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validateMessage()) isValid = false;

        if (!isValid) {
            submitError.innerHTML = 'Fill all the fields before submit!';

            if (event) event.preventDefault();
            return false;
        }

        submitError.innerHTML = '';
        return true;
    }


    function openPopup() {
        popup.classList.add("open-popup");
        overlay.classList.add("show-overlay");
    }
    
    function closePopup() {
        popup.classList.remove("open-popup");
        overlay.classList.remove("show-overlay");

        contactName.value = '';
        contactPhone.value = '';
        contactEmail.value = '';
        contactMessage.value = '';

        nameError.innerHTML = '';
        phoneError.innerHTML = '';
        emailError.innerHTML = '';
        messageError.innerHTML = '';
        submitError.innerHTML = '';
    }

    // Event listeners
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();

        if (validateForm()) {
            openPopup();
        }
    });


    okBtn.addEventListener('click', closePopup);

    contactName.addEventListener('keyup', validateName);

    contactPhone.addEventListener('keyup', validatePhone);

    contactEmail.addEventListener('keyup', validateEmail);

    contactMessage.addEventListener('keyup', validateMessage);

})