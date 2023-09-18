// LobbyComponent.jsx

import React from 'react'
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const LobbyComponent = () => {
    const [roomCode, setRoomCode] = useState('');
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const socket = io('http://localhost:5000');
  
      socket.on('roomCode', (code) => {
        setRoomCode(code);
      });
  
      socket.on('userJoined', (username) => {
        setUsers([...users, username]);
      });
  
      return () => {
        socket.disconnect();
      };
    }, [users]);
  return (
    <div>
      <h1>Room Code: {roomCode}</h1>
      <div>
      </div>
      <div>
        <h2>Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LobbyComponent;
