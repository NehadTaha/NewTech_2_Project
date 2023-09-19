import React, { useEffect } from 'react'
import { useContext } from 'react';
import { SocketContext } from './SocketContent'
import { useNavigate } from 'react-router-dom';
import GreyButton from "./GreyButton";
import { useState } from 'react';


function LobbyComponent() {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [users, setUsers] = useState([]);

  function navToPlay(){
    navigate('/multiplayer/hostPlay')
  }
  if(socket){ 
    console.log("socket found");
  }else {
    

    console.log("No socket found");
  }

  useEffect(() => {
    socket.on('new_room_created', (data) => {
      console.log('data',data);
      setRoomCode(data);
    });
    socket.on('users', (data) => {
      setUsers(data.users);
    }); 
  }, []);
    
   
  return (
    <div >
      <div >
      <h1>Room Code: {roomCode} </h1>

      <div>
        <h2>Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div className='row mb-3'>
        <div className='col-3'>
          <GreyButton text="Start" onClick={() => { navToPlay() }} ></GreyButton>
    </div>
    </div>
    </div>
    </div>
  );
};




export default LobbyComponent;
