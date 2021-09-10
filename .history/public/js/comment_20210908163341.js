const commentFormHandler = async (event) => {
    event.preventDefault();

    const post = document.querySelector('#username-input-signup').value.trim();
    const passwordEl = document.querySelector('#password-input-signup').value.trim();
  