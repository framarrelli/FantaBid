
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

let currentAuction = {
  player: null,
  price: 0,
  team: null,
  countdown: 15
};

io.on('connection', (socket) => {
  console.log('Nuovo client connesso');

  socket.emit('update', currentAuction);

  socket.on('new-bid', (data) => {
    currentAuction = { ...currentAuction, ...data };
    io.emit('update', currentAuction);
  });

  socket.on('new-player', (data) => {
    currentAuction = { ...data, price: 0, team: null, countdown: 15 };
    io.emit('update', currentAuction);
  });
});

server.listen(PORT, () => {
  console.log(`Fantabid server listening on http://localhost:${PORT}`);
});
