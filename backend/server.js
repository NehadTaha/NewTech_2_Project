const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http'); // Import the http module
const socketIo = require('socket.io'); // Correct import statement

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world! This is your backend.');
});

const server = http.createServer(app);
const io = socketIo(server, {
  cors:{
    origin: "http://localhost:3000",
  }
});

app.use(cors());

app.get('/api/data', (req, res) => {
  const data = { message: 'This is some data from the server.' };
  res.json(data);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket) => {
  // Handle socket connection here
  console.log(socket.id)
});
