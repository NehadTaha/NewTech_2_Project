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

  function navToPlay() {
    navigate('/multiplayer/hostPlay')
  }

  function navToCreateQuiz() {
    navigate('/multiplayer/create')
  }

  function onClickHandler() {
    socket.emit('host_start_quiz', {})
  }

  useEffect(() => {
    if (socket) {
      socket.on('new_room_created', (data) => {
        console.log('data', data);
        setRoomCode(data);
      });

      socket.on('player_join', (data) => {
        if (data.code === roomCode) {
          setUsers(JSON.parse(data.username));
          console.log("usernames:  ", users);
          setRoomCode(data.roomCode);
          console.log("username: ", data.username)
          console.log("roomCode: ", data.roomCode)

        }
      });

      socket.on('new_player_join', (data) => {
        console.log('data', data);
        setUsers((users) => [...users, data.username])
        setRoomCode(data.roomCode)
      });
    } else {
      navigate('/Multiplayer')
      console.log("No socket found");
    }


  }, []);



  return (
    <div >
      <div >
        <h1>Room Code: {roomCode} </h1>
        <div>
          <h2>Users:{users.length}</h2>
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
          <div className='col-3'>
            <GreyButton text="Back" onClick={() => { navToCreateQuiz() }}></GreyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LobbyComponent;