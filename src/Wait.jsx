import React, { useEffect } from 'react'

import { useContext } from 'react';

import { SocketContext } from './SocketContent'

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

 

function WaitingRoom() {

  const socket = useContext(SocketContext);

  const navigate = useNavigate();

  const [roomCode, setRoomCode] = useState('');

  const [users, setUsers] = useState("");

  useEffect(() => {
    
    setUsers(localStorage.getItem("username"));
    setRoomCode(localStorage.getItem("roomCode"));
    socket.on('start_game', () => {
        navigate('/multiplayer/play');
  }, [])
  
  });

 

  return (

    <div >

      <div >

        <h1>Room Code: {roomCode} </h1>

        <div>

          <h2>Users:{users}</h2>


        </div>

        
      </div>

    </div>

  );

};

 

export default WaitingRoom;