const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

// Read user type from URL (?userType=student)
const params = new URLSearchParams(window.location.search);
const userType = params.get('userType');

// Apply dynamic theme colors
if (userType === 'tutor') {
    document.documentElement.style.setProperty('--accent-color', '#ff8c75');
    document.documentElement.style.setProperty('--background-image', 'url(images/red-bg.png)');
} 
else if (userType === 'student') {
    document.documentElement.style.setProperty('--accent-color', '#7fa66a');
    document.documentElement.style.setProperty('--background-image', 'url(images/green-bg.png)');
} 
else if (userType === 'guardian') {
    document.documentElement.style.setProperty('--accent-color', '#a3cbff');
    document.documentElement.style.setProperty('--background-image', 'url(images/blue-bg.png)');
}

// Attach validation handler (ONLY if form exists on page)
if (form) {
    form.addEventListener('submit', (e) => {
        let errors = [];

        // If firstname exists, this is the signup page
        if (firstname_input) {
            errors = getSignupFormErrors(
                firstname_input.value,
                email_input.value,
                password_input.value,
                repeat_password_input.value
            );
        } else {
            errors = getLoginFormErrors(
                email_input.value,
                password_input.value
            );
        }

        // Show errors
        if (errors.length > 0) {
            e.preventDefault();
            error_message.innerText = errors.join(". ") + ".";
            return;
        }

        // No errors → proceed
        e.preventDefault();
        goToPage();
    });
}

// SIGNUP VALIDATION
function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];

    if (!firstname) {
        errors.push('First name is required');
        firstname_input.parentElement.classList.add('incorrect');
    }
    if (!email) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (!password) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password && password.length < 8) {
        errors.push('Password must be longer than 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== repeatPassword) {
        errors.push('Passwords must match');
        password_input.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

// LOGIN VALIDATION
function getLoginFormErrors(email, password) {
    let errors = [];

    if (!email) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (!password) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

// Remove red highlight when user types again
const allInputs = [
    firstname_input,
    email_input,
    password_input,
    repeat_password_input
].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
        }
    });
});

// QUESTIONS STORAGE
function loadQuestions() {
    return JSON.parse(localStorage.getItem("questions")) || [];
}

// Display questions on questions.html (only if container exists)
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('questions-container');
    if (!container) return;

    const list = loadQuestions();

    container.innerHTML = list.map(q => `
        <div class="card">
            <h3>${q.title}</h3>
            <p>${q.desc}</p>
            <p><strong>Subject:</strong> ${q.subject}</p>
            <p><strong>Urgency:</strong> ${q.urgency}</p>
            <p class="muted">${q.date}</p>
        </div>
    `).join('');
});
