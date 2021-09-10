const editFormHandler = async (event) => {
    event.preventDefault();

    const titleEl = document.querySelector('#post-title').value.trim();
    const bodyEl = document.querySelector('#post-body').value.trim();
    const postId = document.querySelector('#post-title').value.trim();
