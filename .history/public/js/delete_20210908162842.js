const deletePostHandler = async function(event) {
    event.preventDefault();

    const postId = document.getElementById('#post-id').value.trim();

    if (postId) {
        const response = await fetch('/api/user' , {
            method: 'Delete',
    }