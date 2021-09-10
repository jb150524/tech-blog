const commentFormHandler = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('input[name='post-id']').value.trim();
    const body = document.querySelector('textarea[name='comment-body']').value.trim();

    if (usernameEl && passwordEl) {
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
  