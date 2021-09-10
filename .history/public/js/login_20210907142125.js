const loginFormHandler = async (event) => {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login').value.trim();
    const passwordEl = document.querySelector('#password-input-login').value.trim();

    if(usernameEl && passwordEl) {
        const response = await fetch('/api/user/login', {
            method: 'POST'
            body: JSON
        })
    }
}