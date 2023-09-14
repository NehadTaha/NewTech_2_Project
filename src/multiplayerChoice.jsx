import React, { useEffect } from 'react'
import { useContext } from 'react';
import { SocketContext } from './SocketContent'
import { useNavigate } from 'react-router-dom';
import GreyButton from "./GreyButton";


function MultiplayerChoice() {
   //Use this in every component that emits or listens to ws events
    const socket=useContext(SocketContext);
    const navigate=useNavigate();
    function navToCreateQuiz(){
        navigate('/multiplayer/create')
    }
    useEffect(()=>{
        if(socket){
            socket.emit('reach10',{count: 20})
           
        }else {
            navigate('/Multiplayer')
            console.log("No socket found");
        }
        
    },[])

  return (
    <div >
        <div className="mt-5 pt-5 text-center" style={{minheight: "100vh"}}>
        <h1 className="pt-5  mt-5">Welcome to the Quiz app</h1>

        
        <GreyButton text ="Host" onClick={() => navToCreateQuiz()}/>
        <GreyButton text ="Join"/> 
    </div> 
    </div>
  )
}

export default MultiplayerChoice