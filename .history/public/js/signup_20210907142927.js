const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup').value.trim();
    const passwordEl = document.querySelector('#password-input-signup').value.trim();
  
    if (usernameEl && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ usernameEl, passwordEl }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);