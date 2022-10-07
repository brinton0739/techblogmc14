async function commentFormHander(event) {
    event.preventDefault();

    const commentText = document.querySelector('#comment').value.trim();

    const url = window.location.pathname
    const postId = url.substring(url.lastIndexOf('/') +1)

    if (commentText) {
        const reponse = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                commentText
            }),
            headers: {
                'Content-Type': 'application/json' 
        }
    });

    if(reponse.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}
}
document.querySelector('.comment-form').addEventListener('submit',commentFormHander);


