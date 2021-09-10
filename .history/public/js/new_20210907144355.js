const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name='post-title']').value.trim();
    const body = document.querySelector('textarea[name='post-body']').value.trim();

    if (title && body) {
    const token = await localStorage.getItem('token');
    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to create project');
  }
}
};