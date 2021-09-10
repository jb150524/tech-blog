const commentFormHandler = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('input[name='post-id']').value.trim();
    const body = document.querySelector('textarea[name='comment-body']').value.trim();

    
  