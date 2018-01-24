const http = require('http');
const server = http.createServer(function(req, res){
  const fs = require('fs');
  fs.readFile(__dirname + '/index.html', function(err,data){
    if(err){
      res.writeHead(500);
      return res.end('Err loading index.html');
    };
    res.writeHead(200);
    res.end(data);
  });
};


// set socketio
const io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
    console.log('socekt connected!!');
    socket.emit('from_server', 'hihi', function(send_data){
        console.log(send_data);
    });
    socket.on('from_client', function(recv_data){
        console.log(recv_data);
    });
});


// server listening
server.listen(3000, function(){
  console.log('Conneted 3000 port!');
});
