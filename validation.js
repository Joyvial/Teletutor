const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')
const params = new URLSearchParams(window.location.search);
const userType = params.get('userType');

if (userType === 'tutor') 
{
    document.documentElement.style.setProperty('--accent-color', '#ff8c75');
    document.documentElement.style.setProperty('--background-image', 'url(images/red-bg.png)')
}
else if (userType === 'student')
{
    document.documentElement.style.setProperty('--accent-color', '#7fa66a');
    document.documentElement.style.setProperty('--background-image', 'url(images/green-bg.png)')
}
else if (userType === 'guardian')
{
    document.documentElement.style.setProperty('--accent-color', '#a3cbff');
    document.documentElement.style.setProperty('--background-image', 'url(images/blue-bg.png)')
}

form.addEventListener('submit', (e) => 
{
    let errors = []

    if (firstname_input)
    {
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else
    {
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if (errors.length > 0)
    {
        e.preventDefault()
        error_message.innerText = errors.join(". ") + "."
    }
})

function getSignupFormErrors(firstname, email, password, repeatPassword)
{
    let errors = []

    if (firstname === '' || firstname == null)
    {
        errors.push('First name is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if (email === '' || email == null)
    {
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null)
    {
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password.length < 8)
    {
        errors.push('Password must be longer than 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password !== repeatPassword)
    {
        errors.push('First password must match second password')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

function getLoginFormErrors(email, password)
{
    let errors = []

    if (email === '' || email == null)
    {
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null)
    {
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input =>
{
    input.addEventListener('input', () =>
    {
        if(input.parentElement.classList.contains('incorrect'))
        {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})
