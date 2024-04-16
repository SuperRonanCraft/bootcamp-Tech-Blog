async function commentFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.posted) {
          location.replace(`/blog/${data.blog.id}`);
        } else {
          alert('Failed to post blog!');
        }
      });
  }
}

document.querySelector('#blog').addEventListener('submit', commentFormHandler);
