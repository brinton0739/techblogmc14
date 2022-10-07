async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim()
    const postContent = document.querySelector('#post-content').value;

    if (title && postContent) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                postContent
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);