document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('input', validateLogin);
});

function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var termsCheck = document.getElementById('termsCheck').checked;

    if (email && password && termsCheck) {
        document.getElementById('emailAlert').classList.add('d-none');
        document.getElementById('emailSuccess').classList.add('d-none');
        document.getElementById('passwordAlert').classList.add('d-none');
        document.getElementById('passwordSuccess').classList.add('d-none');
        return true;
    } else {
        if (!email) {
            document.getElementById('emailAlert').classList.remove('d-none');
        } else {
            document.getElementById('emailAlert').classList.add('d-none');
        }

        if (!password) {
            document.getElementById('passwordAlert').classList.remove('d-none');
        } else {
            document.getElementById('passwordAlert').classList.add('d-none');
        }

        return false;
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        document.getElementById('emailAlert').classList.remove('d-none');
        document.getElementById('emailSuccess').classList.add('d-none');
    } else {
        document.getElementById('emailAlert').classList.add('d-none');
        document.getElementById('emailSuccess').classList.remove('d-none');
    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('passwordAlert').classList.remove('d-none');
        document.getElementById('passwordSuccess').classList.add('d-none');
    } else {
        document.getElementById('passwordAlert').classList.add('d-none');
        document.getElementById('passwordSuccess').classList.remove('d-none');
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(alertId) {
    document.getElementById('emailAlert').classList.add('d-none');
    document.getElementById('emailSuccess').classList.add('d-none');
    document.getElementById('passwordAlert').classList.add('d-none');
    document.getElementById('passwordSuccess').classList.add('d-none');
    document.getElementById(alertId).classList.remove('d-none');
}

if (localStorage.getItem("theme") === "enabled") {
    document.body.classList.add('bg')
}
else {
    document.body.classList.remove('bg')
}
