// Fetch JSON data from the backend
fetch('/users')
  .then(res => res.json())  // parse JSON
  .then(users => {
    const container = document.getElementById('users-container');
    
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <hr>
      `;
      container.appendChild(userDiv);
    });
  })
  .catch(err => {
    console.error('Error loading users:', err);
  });
