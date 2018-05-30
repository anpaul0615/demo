import Boom from 'boom';
import Hapi from 'hapi';
/**
 * Create Server
 */
const Server = new Hapi.Server();
/**
 * Set Connection Config
 */
import corsConfig from '../conf/cors.conf.json';
Server.connection({
    host: '0.0.0.0',
    port: 5000,
    // tls: {
    //     key: require('fs').readFileSync(__dirname + '/../conf/ssl/ems.key'),
    //     cert: require('fs').readFileSync(__dirname + '/../conf/ssl/ems.csr'),
    // },
    routes: {
        cors: corsConfig,
    },
    router: {
        stripTrailingSlash: true
    }
});
/**
 * Set Models
 */
import dbConfig from '../conf/mysql.conf.json';
import Models from './models/__init__';
Server.app.models = Models(dbConfig);
/**
 * Set Services
 */
import jwtConfig from '../conf/jwt.conf.json';
import Services from './services/__init__';
Server.app.services = Services({ jwtConfig });
/**
 * Set API Router
 */
import Routes from './routes/__init__';
Server.route({
    method: 'GET',
    path: '/',
    handler: (request,reply)=>{
        return reply({ name: 'hapi-auth-api', version: 'v1.0' });
    }
});
Server.route(Routes);
/**
 * 404 handler
 */
Server.route({
    method: '*',
    path: '/{p*}',
    handler: (request,reply)=>{
        console.log(`[404 Error] :: ${request.method} ${request.path}`);
        return reply(Boom.notFound('Resource Not Found..!'));
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
    console.log(`Server running at: ${Server.info.uri}`);
});
