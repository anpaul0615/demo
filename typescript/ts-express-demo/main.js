const http = require('http');
const debug = require('debug')('express:server');
const { Server } = process.env.NODE_ENV === 'production'
    ? require('./build/Server.js')
    : require('./src/Server.ts');

// create server
const httpPort = 8080;
const app = Server.bootstrap().app;
const httpServer = http.createServer(app);
httpServer.listen(httpPort);

// error handler
httpServer.on('error', function(error){
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof addr === 'string' 
        ? `Pipe ${addr}`
        : `Port ${addr.port}`;
    
    switch (error.code) {
    case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(`${bind} is already in use`)
        process.exit(1);
        break;
    default:
        throw error;
    }
});

// binding handler
httpServer.on('listening', function(){
    const addr = httpServer.address();
    const bind = typeof addr === 'string' 
        ? `Pipe ${addr}`
        : `Port ${addr.port}`;
    console.info(`Listening on :: ${bind}`);
});
