const net = require('net');
const PORT = 3000;

const server = net.createServer(function(client) {
  console.log('//client connected');

  client.on('data',function(data){
    console.log('[data] :: ');
    console.log(data + '');
    console.log('[buffer] :: ');
    console.log(data);
    console.log('[buffer-detail] :: ');
    var buf = Buffer.from(data, 'ascii');
    for(var i=0; i<buf.length; i++){
      console.log(`${i} :: ${buf[i]}`);
    }
  });

  client.on('end', function() {
    console.log('//client disconnected');
  });

});

server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(function(){
      server.close();
      server.listen(PORT);
    }, 1000);
  }
});

server.listen(PORT, function() { //'listening' listener
    console.log('[port:'+PORT+'] TCP Server listening');
});
