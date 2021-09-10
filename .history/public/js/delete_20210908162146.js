const deletePostHandler = async (event) =>{
    event.preventDefault();

    const postId = document.querySelector('#username-input-signup').value.trim();