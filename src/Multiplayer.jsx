 import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom';
 //rfce to create the import and the other stuff
import io from "socket.io-client";


const SERVER_HOST="http://localhost:5000";
 function Multiplayer() {
    const socket=useRef();
    useEffect(()=>{
        //on load
        socket.current=io(SERVER_HOST);

        console.log(socket.current);
    },[])
   return (
    <Outlet/>
     //<div>multiplayer</div>
   )
 }
 
 export default Multiplayer