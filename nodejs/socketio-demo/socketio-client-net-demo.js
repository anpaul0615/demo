const net = require('net');
const client = new net.Socket();
client.connect(3000, 'localhost', function() {
  console.log('Connected');

  /***
   *  Socket.io HTTP Request Format
   *
   *  [scheme]://[host]/[namespace]/[protocol-version]/[transport id]/[session-id]/(?[query])
   */
  /***
   *  Socket.io Message Format
   *
   *  [message-type]:[message-id (+)]:[message-endpoint](:[message-data])
   */
  /***
   *  Socket.io Packet Message-Type
   *
   *   Packet#CONNECT (0)
   *   Packet#DISCONNECT (1)
   *   Packet#EVENT (2)
   *   Packet#ACK (3)
   *   Packet#ERROR (4)
   *   Packet#BINARY_EVENT (5)
   *   Packet#BINARY_ACK (6)
   */

  // make packet
  var messageType = 5;
  var messageId = 1;
  var messageEndpoint;
  var messageData = {name:'foo'};
  var packet = type +":"+ id +":"+ messageEndpoint +":"+ JSON.stringify(data);

  client.write(packet);  // err..
});

client.on('data', function(data) {
  console.log('Received: ' + data);
  // client.destroy();
});

client.on('close', function() {
  console.log('Connection closed');
});
