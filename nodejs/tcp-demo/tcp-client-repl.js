const net = require('net');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const SERVER_IP = 'localhost';
const SERVER_PORT = 3000;
const client = new net.Socket();

(function doConnect(){
	client.connect(SERVER_PORT,SERVER_IP, function() {
		console.log('Connected..! \n\n');

		readline.on('line', function(input) {
			client.write(input);
		});
		readline.on('SIGINT', function() {
			if(readline){
				readline.question('exit?', function(input) {
					if (input.match(/^y(es)?$/i)) readline.close();
				});
			}else{
				readline.close();
			}
		});
		readline.on('close', function(input) {
			client.end();
		});
		readline.setPrompt('> ');
		readline.prompt();
	});
})();


client.on('data', function(data) {
	console.log("\n"+data);
	readline.prompt();
});


client.on('error', function(err) {
	if(err.code == "ENOTFOUND")
    console.log("[ERROR] No device found at this address..!");
  else if(err.code == "ECONNREFUSED")
    console.log("[ERROR] Connection refused! Please check the IP..!");
	else if(err.code == "ETIMEOUT")
    console.log("[ERROR] Connection timeout! Please check the server statement..!");

	readline.question('re connect?', function(input) {
		if(input.match(/^y(es)?$/i)) doConnect();
		else{
			readline = null;
			client.end();
		}
	});
});
client.on('disconnect', function() {
  console.log("Disconnected..!");
});
client.on('close', function() {
	console.log('Connection closed..!');
	readline = null;
});
