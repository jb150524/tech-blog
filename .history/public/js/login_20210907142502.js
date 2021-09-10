const loginFormHandler = async (event) => {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login').value.trim();
    const passwordEl = document.querySelector('#password-input-login').value.trim();

    if(usernameEl && passwordEl) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ usernameEl, passwordEl }),
            headers: { 'Content-Type': 'application/json' },
            });
            
            if (response.ok) {
                // If successful, redirect the browser to the profile page
                document.location.replace('/dashboard');
              } else {
                alert(response.statusText);
              }
            }
          };

document
          .querySelector('.login-form')
          .addEventListener('submit', loginFormHandler);