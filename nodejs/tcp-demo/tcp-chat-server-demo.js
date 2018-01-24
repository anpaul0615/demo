// Load the TCP Library
const net = require('net');

// Keep track of the chat clients
let clients = [];

// Start a TCP Server
const server = net.createServer(function(socket){

  // Identify this client
  socket.name = "(" + socket.remoteAddress + ":" + socket.remotePort + ")"

  // Put this new client in the list
  clients.push(socket);

  // Send a nice welcome message and announce
  socket.write("Welcome " + socket.name + "\n");
  broadcast(socket.name + " joined the chat\n", socket);

  // Handle incoming messages from clients.
  socket.on('data', function (data) {
    console.log("[client][data] ::");
    broadcast(socket.name + "> " + data, socket);
  });

  // Remove the client from the list when it leaves
  socket.on('end', function () {
    console.log("[client][end] ::");
    clients.splice(clients.indexOf(socket), 1);
    broadcast(socket.name + " left the chat.\n");
  });

  // Handling client err
  socket.on('error', function(err){
    console.log("[client][error] :: "+ err +"\n");
    throw err;
  });
});

// Handling server err
server.on('error', function(err){
  console.log("[server][error] :: "+ err +"\n");
  throw err;
});


// Send a message to all clients
function broadcast(message, sender) {
  clients.forEach(function (client) {
    // Don't want to send it to sender
    if (client === sender) return;
    client.write(message);
  });
  // Log it to the server output too
  console.log(message);
}

// Put a friendly message on the terminal of the server.
server.listen(3000, function() {
    console.log("Chat server running at port 3000\n");
});
