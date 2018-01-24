const cluster = require('cluster');
const os = require('os');

// master
if(cluster.isMaster){
  for(cpu of os.cpus()){
    cluster.fork();
  };
  cluster.on('online', function (worker) {
    console.log('[master] : worker ' + worker.process.pid + ' created');
  });
  cluster.on('exit', function(worker, code, signal) {
    console.log('[master] : worker ' + worker.process.pid + ' died');
    cluster.fork();
  });
}
// worker
else{
  const express = require('express');
  const app = require('./app.js')(express);
  app.listen(3000, function(){
      console.log('[worker]('+ process.pid +') : server is listening.. [port:3000]');
  });
}
