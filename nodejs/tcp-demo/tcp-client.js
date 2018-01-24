const net = require('net');

const client = new net.Socket();
client.on('data', function(data) {
	console.log('Received: ' + data);
	// client.destroy();
});
client.on('close', function() {
	console.log('Connection closed');
});

client.connect(3000, 'localhost', function() {
	console.log('Connected');
	// client.write('hello');
});
