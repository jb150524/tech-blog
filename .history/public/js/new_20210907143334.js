const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input [name='post-title']').value.trim();
    
    