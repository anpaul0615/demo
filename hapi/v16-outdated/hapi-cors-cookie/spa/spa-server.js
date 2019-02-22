'use strict';
const Hapi = require('hapi');
const Boom = require('boom');
const fs = require('fs');

/**
 * Create Server
 */
const Server = new Hapi.Server();
Server.connection({
  host: '127.0.0.1',
  port: 3000,
  tls: {
      key: fs.readFileSync(__dirname + '/../conf/secret.key'),
      cert: fs.readFileSync(__dirname + '/../conf/secret.csr'),
  },
});
/**
 * Set middleware
 */
Server.path(__dirname + '/static/');
Server.register(require('inert'), (err)=>{
  if(err) throw err;
});


/**
 * Route
 */
Server.route({
  method: '*',
  path: '/static/{filename*}',
  handler: function (request, reply) {
    const { filename } = request.params;
    console.log(`HTTP GET /static/${filename}`);
    reply.file(filename);
  }
});
Server.route({
  method: '*',
  path: '/{p*}',
  handler: function (request, reply) {
    console.log('HTTP GET /');
    reply.file('index.html');
  }
});


/**
 * Start Server
 */
Server.start((err)=>{
  if(err) throw err;
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`SPA Server running at: ${Server.info.uri}`);
});