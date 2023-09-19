// LobbyComponent.jsx
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
   
  useEffect(() => {
      if(socket){
      //  console.log(socket.id);
      //  socket.on('new_room_created', (data) => {
      //    console.log('room code: ', data)
      //     setRoomCode(data)
        
      //    // console.log('room code: ', data);
      //   });
        
        socket.on('userJoined', (username) => {
           setUsers([...users, username]);
          });
      
      }
      else{
        console.log("No socket found");
      }

      
  
     
      // return () => {
      //   socket.disconnect();
      // };
    }, [socket]);
    function navToPlay(){
        navigate('/multiplayer/hostPlay')
    }
    socket.on('new_room_created', (data) => {
      console.log('room code: ', data)
       setRoomCode(data)
     
      // console.log('room code: ', data);
     });
    // return the code and the users in the room
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
