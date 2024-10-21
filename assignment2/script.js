document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const bgColorInput = document.getElementById('bgColor');
    const textColorInput = document.getElementById('textColor');
    

    // Real-time validation
    nameInput.addEventListener('input', () => {
        validateName();
    });

    emailInput.addEventListener('input', () => {
        validateEmail();
    });

    ageInput.addEventListener('input', () => {
        validateAge();
    });

    // Form submission
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });

    // Customization
    bgColorInput.addEventListener('input', (e) => {
        document.body.style.backgroundColor = e.target.value;
    });

    textColorInput.addEventListener('input', (e) => {
        document.body.style.color = e.target.value;
    });

    // Validation functions
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isAgeValid = validateAge();
        return isNameValid && isEmailValid && isAgeValid;
    }

    function validateName() {
        const nameValue = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        if (nameValue.length < 3) {
            nameError.textContent = 'Name must be at least 3 characters long.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validateAge() {
        const ageValue = ageInput.value;
        const ageError = document.getElementById('ageError');
        if (ageValue < 0) {
            ageError.textContent = 'Age cannot be negative.';
            return false;
        } else {
            ageError.textContent = '';
            return true;
        }
    }
});
