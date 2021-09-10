const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name='post-title']').value.trim();
    const body = document.querySelector('textarea[name='post-body']').value.trim();

    const token = localStorage.getItem()