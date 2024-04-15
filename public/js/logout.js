function logout() {
  fetch('/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.loggedOut) {
        document.location.replace('/');
      } else {
        document.alert('Failed to log out?');
      }
    });
}

document.querySelector('#logout').addEventListener('click', logout);
