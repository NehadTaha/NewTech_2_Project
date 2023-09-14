import React, { useState } from 'react'; // Added useState
import './index.css'; // Updated import statement
import { useEffect } from 'react'; // Removed redundant import (useState was added)
import io from 'socket.io-client';


function Join() {
  const [username, setUsername] = useState(''); // Added state for username

  const handleJoin = () => {
    const socket = io('http://localhost:5000');
    socket.emit('join', username);
    console.log('username: ', username)
    setUsername(''); // Clear username after join
    console.log('username after click: ', username)
  };

  return (
    <div className="joinContainer">
      <div className="inputGroup">
        <label htmlFor="roomCode">Room Code:</label>
        <input type="text" id="roomCode" />
      </div>
      <div className="inputGroup mt-3">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username} // Bind input value to username state
          onChange={(e) => setUsername(e.target.value)} // Update username state on change
        />
      </div>
      <button onClick={handleJoin} className="mt-3">Join</button>
    </div>
  );
}

export default Join;
