import Boom from 'boom';
import Hapi from 'hapi';
/**
 * Create Server
 */
const Server = new Hapi.Server();
Server.connection();
/**
 * Set API Router
 */
Server.route({
    method: 'GET',
    path: '/',
    handler: (request,reply)=>{
        return reply('<h1>hello hapi-serverless!!</h1>');
    }
});
Server.route({
    method: 'GET',
    path: '/api',
    handler: (request,reply)=>{
        return reply({ name: 'hapi-serverless', version: 'v1.0' });
    }
});
/**
 * 404 handler
 */
Server.route({
    method: '*',
    path: '/{p*}',
    handler: (request,reply)=>{
        console.log(`[404] :: ${request.method} ${request.path}`);
        return reply(Boom.notFound('Resource Not Found..!'));
    }
});
/**
 * 500 logger
 */
Server.on('request-error', (request,err)=>{
    console.log(`[500] :: ${request.method} ${request.path}`);
    console.error(err.trace || err.stack || err);
});
/**
 * Export Server
 */
export default Server;