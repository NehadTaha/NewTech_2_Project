const express = require('express');
const bodyParser = require('body-parser'); // For parsing JSON and URL-encoded data
const socketIo = require('socket.io');
const cors = require('cors'); // For handling Cross-Origin Resource Sharing
const http = require('http');

const app = express();
const server=http.createServer(app);
const io = socketIo(server, {
  cors: {
      origin: ['http://127.0.0.1:5173', 'http://localhost:5173','http://localhost:3000']
  }
})

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
  io.emit('message', 'Hello World!');
  res.send('ok!');
})
// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});
// using io.on to listen and emit events from the server to the client
//listen to the connection event for incoming sockets and log it to the console
io.on('connection', (socket) => {
   console.log('socket: ', socket.id);
 
  
  //using  socket.on to listen to the event from the client, where  the event name is  message
  socket.on('reach10', data => {
       console.log('data: ', data);
  })
  //receive the save settings event from the client
  socket.on('save_settings', data => {
      console.log('save settings ', data);
     
      setTimeout(() => {
        socket.emit('new_room_created', socket.id);
      }, 500)
  })

 
  // emit the socket id to the client by using an event called new_room_created
  

})

