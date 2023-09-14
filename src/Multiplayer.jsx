import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom';
 //rfce to create the import and the other stuff
import {io }from "socket.io-client";
import { SocketContext } from './SocketContent';
import { useNavigate } from 'react-router-dom';

const SERVER_HOST="http://localhost:5000";
 function Multiplayer() {
    const socket=useRef();
    const navigate = useNavigate();
    useEffect(()=>{
        //on load

        socket.current=io(SERVER_HOST);


        console.log(socket.current);
        navigate('Choice')
    },[])
   return (
    <SocketContext.Provider value={socket.current}>
        <Outlet/>
    </SocketContext.Provider>

     //<div>multiplayer</div>
   )
 }
 
 export default Multiplayer