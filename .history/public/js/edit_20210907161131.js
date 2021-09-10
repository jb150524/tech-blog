const editFormHandler = async (event) => {
    event.preventDefault();

    const titleEl = document.querySelector('#post-title').value.trim();
    const bodyEl = document.querySelector('#post-body').value.trim();
    const postId = document.querySelector('#post-id').value.trim();

    if (titleEl && bodyEl && postId) {
        const response = await fetch('/api/user', {
          method: 'PUT',
          body: JSON.stringify({ titleEl, bodyEl, postId}),
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
