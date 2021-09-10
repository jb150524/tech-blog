const deletePostHandler = async function(event) {
    event.preventDefault();

    const postId = document.getElementById('#post-id').value.trim();

    if (postId) {
        const response = await fetch('/api/userpostId.value, {
            method: 'Delete',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document 
  .querySelector('.delete-btn')
  .addEventListener('click', deletePostHandler);