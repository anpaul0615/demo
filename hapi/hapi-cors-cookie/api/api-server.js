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
    port: 8888,
    tls: {
        key: fs.readFileSync(__dirname + '/../conf/secret.key'),
        cert: fs.readFileSync(__dirname + '/../conf/secret.csr'),
    },

    routes: {
        cors: {
            // origin: ['http://127.0.0.1:3000','http://127.0.0.1:4000',],
            origin: ['https://127.0.0.1:3000','https://127.0.0.1:4000',],
            headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'],
            credentials: true
        },
    },
    router: {
        stripTrailingSlash: true
    }
});
/**
 * Set Cookies Config
 */
Server.state('access-token', {
    ttl: 24 * 60 * 60 * 1000, // One day
    path: '/',
    isSecure: true,
    isHttpOnly: true,
    encoding: 'base64',
    clearInvalid: true, // remove invalid cookies
    strictHeader: true // don't allow violations of RFC 6265
});


/**
 * Set API Router
 */
Server.route({
    method: 'POST',
    path: '/sessions',
    handler: (request,reply)=>{
        const token = 'a123456789';
        reply({'access-token':token}).state('access-token',token);
    }
});
Server.route({
    method: 'GET',
    path: '/sessions/me',
    config: {
        pre: [{
            assign: 'auth',
            method: (request,reply)=>{
                const token = request.state['access-token'];
                if(!token) reply(Boom.forbidden('Missing access-token..!'));
                else reply(token);
            }
        }]
    },
    handler: (request,reply)=>{
        console.log('HTTP GET /sessions/me :: ok');
        const tokenData = request.pre.auth;
        reply({
            msg: 'ok',
            data: {
                'tokenData': tokenData
            }
        });
    }
});


/**
 * 404 handler
 */
Server.route({
    method: '*',
    path: '/{p*}',
    handler: (request,reply)=>{
        console.log(`[404 Error] :: ${request.method} ${request.path}`);
        reply(Boom.notFound('Resource Not Found..!'));
    }
});
/**
 * 500 logger
 */
Server.on('request-error', (request,err)=>{
    console.log(`[500 Error] :: ${request.method} ${request.path}`);
    console.error(err.trace || err.stack || err);
});
/**
 * Server start
 */
Server.start((err)=>{
    if(err) throw err;
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`API Server running at: ${Server.info.uri}`);
});