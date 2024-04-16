async function blogEditHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  const path = window.location.pathname.split('/');
  const blog_id = Number(path[path.length - 1]);

  console.log(blog_id, title, content);

  if (title && content && blog_id) {
    fetch(`/api/blog/${blog_id}`, {
      method: 'PATCH',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.updated) {
          location.replace(`/dashboard`);
        } else {
          alert('Failed to post blog!');
        }
      });
  }
}

document.querySelector('#blog').addEventListener('submit', blogEditHandler);
