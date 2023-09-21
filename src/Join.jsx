import React, { useEffect } from 'react'

import { useContext } from 'react';

import { SocketContext } from './SocketContent'

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

   

function Join() {

  // Added state for username

  const socket = useContext(SocketContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const [code, setCode] = useState('');

 

  const handleJoin = () => {

    const roomCode = document.getElementById('roomCode').value; // Get the room code from the input field

    socket.emit('player_join', { username, roomCode }); // Send username and roomCode to server

  //save the user name in local storage
  localStorage.setItem("username", username);
  localStorage.setItem("roomCode", roomCode);

    navigate('/multiplayer/wait');

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