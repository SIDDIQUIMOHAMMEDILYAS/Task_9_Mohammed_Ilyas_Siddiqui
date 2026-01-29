// --- DOM Elements ---
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');
const website = document.getElementById('website');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const terms = document.getElementById('terms');
const strengthBar = document.getElementById('strength-bar');
const toast = document.getElementById('toast');

// --- Event Listeners ---

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateInputs()) {
        showToast();
        form.reset();
        resetClasses();
        strengthBar.style.width = '0';
        // Reset border of terms container
        document.getElementById('terms-control').className = 'form-control full-width';
    }
});

// Attach Validation Listeners
// Text fields validate on blur (when leaving the field)
const inputs = [username, email, phone, dob, website, password, confirmPassword];
inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
});

// Password needs extra logic for strength meter
password.addEventListener('keyup', () => {
    checkPasswordStrength(password.value);
    if(confirmPassword.value !== '') validateField(confirmPassword);
});

// Checkbox validates on change
terms.addEventListener('change', () => validateField(terms));


// --- Validation Functions ---

function validateInputs() {
    let isValid = true;
    inputs.forEach(input => {
        if(!validateField(input)) isValid = false;
    });
    if(!validateField(terms)) isValid = false;
    return isValid;
}

function validateField(input) {
    const parent = input.parentElement;
    // Special case for checkbox because its parent structure is slightly different
    const container = input.id === 'terms' ? parent : parent; 
    const value = input.type === 'checkbox' ? input.checked : input.value.trim();
    let result = false;
    let errorMsg = '';

    switch (input.id) {
        case 'username':
            // Min 3 chars, letters and spaces only
            result = /^([a-zA-Z\s]{3,})$/.test(value);
            errorMsg = result ? '' : 'Name must be at least 3 chars (letters only)';
            break;

        case 'email':
            // Standard Email Regex
            result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            errorMsg = result ? '' : 'Please provide a valid email';
            break;

        case 'phone':
            // Must be exactly 10 digits
            result = /^\d{10}$/.test(value);
            errorMsg = result ? '' : 'Phone must be 10 digits';
            break;

        case 'dob':
            result = isAdult(value);
            errorMsg = result ? '' : 'You must be at least 18 years old';
            break;

        case 'website':
            // Optional field, if empty it's valid, otherwise check URL
            if(value === '') {
                result = true;
                errorMsg = '';
            } else {
                result = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value);
                errorMsg = result ? '' : 'Please include a valid URL (http/https)';
            }
            break;

        case 'password':
            result = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
            errorMsg = result ? '' : 'Min 8 chars, Upper/Lower, Number & Special Char';
            break;

        case 'confirm-password':
            result = value === password.value && value !== '';
            errorMsg = result ? '' : 'Passwords do not match';
            break;

        case 'terms':
            result = input.checked;
            errorMsg = result ? '' : 'You must agree to the terms';
            break;
    }

    setError(input, errorMsg);
    return result;
}

function setError(input, message) {
    // Determine parent wrapper
    const parent = input.parentElement;
    
    if (message !== '') {
        // Error State
        parent.classList.remove('success');
        parent.classList.add('error');
        const small = parent.querySelector('small');
        if(small) small.innerText = message;
    } else {
        // Success State
        parent.classList.remove('error');
        parent.classList.add('success');
    }
}

// Helper: Check Age > 18
function isAdult(dateString) {
    if(!dateString) return false;
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18;
}

// Password Strength Meter Logic
function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length > 0) strength += 1;
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 1;
    if (password.match(/\d/)) strength += 1;
    if (password.match(/[^a-zA-Z\d]/)) strength += 1;

    switch(strength) {
        case 0:
            strengthBar.style.width = '0%'; strengthBar.style.backgroundColor = 'transparent'; break;
        case 1: case 2:
            strengthBar.style.width = '30%'; strengthBar.style.backgroundColor = '#e74c3c'; break;
        case 3:
            strengthBar.style.width = '60%'; strengthBar.style.backgroundColor = '#f1c40f'; break;
        case 4: case 5:
            strengthBar.style.width = '100%'; strengthBar.style.backgroundColor = '#2ecc71'; break;
    }
}

function resetClasses() {
    const controls = document.querySelectorAll('.form-control');
    controls.forEach(c => {
        c.classList.remove('success', 'error');
    });
}

function showToast() {
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 4000);
}