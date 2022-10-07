const url = window.location.pathname;
const postId = url.substring(url.lastIndexOf("/") + 1);

async function postFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const postContent = document.querySelector("#post-content").value;

  if (title && postContent) {
    const response = await fetch(`/api/posts`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        postContent,
        postId,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");;
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".post-form")
  .addEventListener("submit", postFormHandler);

async function deletePostHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
}

document
    .querySelector("#delete-post")
    .addEventListener("click", deletePostHandler);
