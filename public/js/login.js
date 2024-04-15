function login(event) {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.loggedIn) {
          document.location.replace('/');
        } else {
          alert('Failed to login!');
        }
      });
  }
}

document.querySelector('#login').addEventListener('submit', login);
