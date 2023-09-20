import React, { useEffect } from 'react'
import { useContext } from 'react';
import { SocketContext } from './SocketContent'
import { useNavigate } from 'react-router-dom';
import GreyButton from "./GreyButton";
import { useState } from 'react';


function Join() {
  // Added state for username
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState(''); 
  const [code, setCode] = useState('');
  const handleJoin = () => {
    
    socket.emit('join', {username:username,
      code:code});
    console.log('username: ', username)
    setUsername(''); // Clear username after join
    console.log('username after click: ', username)
  };

  return (
    <div className="joinContainer">
      <div className="inputGroup">
        <label htmlFor="roomCode">Room Code:</label>
        <input type="text" id="roomCode"value={code} onChange={(e) => setCode(e.target.value)} />
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
