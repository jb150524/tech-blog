const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup').value.trim();
    const passwordEl = document.querySelector('#password-input-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);