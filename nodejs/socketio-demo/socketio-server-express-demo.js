const express = require('express');
const app = express();
const io = require('socket.io')(app);

// http route
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// socket event listen
io.on('connection', function (socket) {
  socket.emit('from_server', 'hihi');
  socket.on('from_client', function (data) {
    console.log(data);
  });
});

// server listening
app.listen(3000, function(){
  console.log('Conneted 3000 port!');
});
