const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#username-input-signup').value.trim();