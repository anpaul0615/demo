const net = require('net');
const PORT = 3000;

const server = net.createServer(function(client) {
  console.log('//client connected');
  client.on('data',function(data){
    console.log('[data] :: ');
    console.log(data + '');
  });
  client.on('end', function() {
    console.log('//client disconnected');
  });
});

server.listen(PORT, function() { //'listening' listener
    console.log('[port:'+PORT+'] TCP Server listening');
});
