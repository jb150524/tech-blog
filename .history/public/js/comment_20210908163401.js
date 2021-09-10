const commentFormHandler = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('[#username-input-signup').value.trim();
    const body = document.querySelector('#password-input-signup').value.trim();
  