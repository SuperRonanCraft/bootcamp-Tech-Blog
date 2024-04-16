async function commentFormHandler(event) {
  event.preventDefault();
  const comment = document.querySelector('#comment').value.trim();

  const path = window.location.pathname.split('/');
  const blog_id = Number(path[path.length - 1]);
  if (comment && blog_id) {
    fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.posted) {
          location.reload();
        } else {
          alert('Failed to post comment!');
        }
      });
  }
}

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);
