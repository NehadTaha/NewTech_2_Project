import React, { useEffect } from 'react'
import { useContext } from 'react';
import { SocketContext } from './SocketContent'
import { useNavigate } from 'react-router-dom';

function MultiplayerChoice() {
   //Use this in every component that emits or listens to ws events
    const socket=useContext(SocketContext);
    const navigate=useNavigate();
    useEffect(()=>{
        if(socket){
            socket.emit('reach10',{count: 20})
           
        }else {
            navigate('/Multiplayer')
            console.log("No socket found");
        }
        
    },[])

  return (
    <div>
        <button>Host</button>
        <button>Join</button>  
    </div> 
  )
}

export default MultiplayerChoice