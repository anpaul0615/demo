const net = require('net');
const PORT = 3000;

const server = net.createServer(function(client) {
  console.log('//client connected');

  client.setEncoding('utf8');
  client.on('data',function(data){
	  var client_msg = data;
	  var server_msg = '(echo) ' + data;
    console.log('client :: ' + client_msg);
	  console.log('server :: ' + server_msg);
	  client.write(server_msg);
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

server.listen(PORT, function() {
    console.log('[port:'+PORT+'] TCP Server listening..');
});
