'use strict';
const Boom = require('boom');
const JWTService = require('./services/JWTService');
const fs = require('fs');

module.exports = function(server){

    /**
     * Set Connection Config
     */
    server.connection({
        port: 443,
        host: 'localhost',
        tls: {
            key: fs.readFileSync(__dirname + '/key.pem'),
            cert: fs.readFileSync(__dirname + '/cert.pem')
        },
        routes: {
            cors: {
                // origin: ['https://localhost:3000'],
                origin: ['*'],
                headers: [
                    'Accept',
                    'Authorization',
                    'Content-Type',
                    'If-None-Match'
                ],
                credentials: true
            }
        }
    });

    /**
     * Set Cookies Config
     */
    server.state('access-token', {
        ttl: 24 * 60 * 60 * 1000, // One day
        path: '/',
        isSecure: true,
        isHttpOnly: true,
        encoding: 'none',
        clearInvalid: true, // remove invalid cookies
        strictHeader: true // don't allow violations of RFC 6265
    });

    /**
     * Set Request Lifecycle
     */
    server.ext('onRequest', (request, reply)=>{
        console.log('onRequest called..!');
        return reply.continue();
    });
    server.ext('onPreAuth', (request, reply)=>{
        console.log('onPreAuth called..!');
        return reply.continue();
    });
    server.ext('onPostAuth', (request, reply)=>{
        console.log('onPostAuth called..!');

        // todo:
        // check token-expire & renew

        return reply.continue();
    });
    server.ext('onPreHandler', (request, reply)=>{
        console.log('onPreHandler called..!');
        return reply.continue();
    });
    server.ext('onPostHandler', (request, reply)=>{
        console.log('onPostHandler called..!');
        return reply.continue();
    });
    server.ext('onPreResponse', (request, reply)=>{
        console.log('onPreResponse called..!');
        return reply.continue();
    });

    /**
     * routing
     */
    server.route({
        method: 'GET',
        path: '/',
        handler: (request,reply)=>{
            let data = {
                version: 'v1.0',
                routes: [
                    'HTTP GET /',
                    'HTTP GET /tokens/me',
                    'HTTP GET /tokens/new',
                    'HTTP GET /data',
                ]
            };
            return reply(data);
        }
    });
    server.route(require('./routes/auth'));
    server.route(require('./routes/data'));

    /**
     * 404 handler
     */
    server.route({
        method: '*',
        path: '/{p*}',
        handler: (request, reply)=>{
            console.log(`[404 Error] :: ${request.path}`);
            return reply(Boom.notFound('Resource Not Found..!'));
        }
    });
    /**
     * 500 logger
     */
    server.on('request-error', function (request, err) {
        console.log(`[500 Error] :: ${request.path}`);
        console.error(err.trace || err.stack || err);
    });

    return server;
};