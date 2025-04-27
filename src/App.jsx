import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="App">
      <h1 style={{color:"#ffff"}}>GitHub Users</h1>
      <div className="user-grid">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
