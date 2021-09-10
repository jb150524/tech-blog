const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name='post-title']').value.trim();
    const body = document.querySelector('textarea[name='post-body']').value.trim();

    if (title && body) {
    const token = localStorage.getItem('token');
    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to create project');
  }
}
};