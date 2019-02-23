import Hapi from '@hapi/hapi';
import Boom from '@hapi/boom';

import { SSL_KEY, SSL_CERT } from './utils/SSLKeyProvider';
import { CORS_CONFIG } from './utils/ConfigProvider';
import Routes from './routes'

const HTTPS = true;
const ADDRESS = '0.0.0.0';
const HOST = 'localhost';
const PORT_HTTP = 80;
const PORT_HTTPS = 443;

export const start = async function() {
	/**
	 * Server Config
	 */
  const Server:Hapi.Server = new Hapi.Server({
    address: ADDRESS,
    host: HOST,
    port: PORT_HTTPS,
    tls: {
      key: SSL_KEY,
      cert: SSL_CERT,
      secureOptions: require('constants').SSL_OP_NO_TLSv1,
    },
    routes: { cors: CORS_CONFIG, },
    router: { stripTrailingSlash: true }
  });

	/**
	 * Server Events Handler
	 */
	Server.events.on(
		'log',
		(event:Hapi.LogEvent, tags:any) => {
			if (tags.error) {
				console.log(`[event:log:error] ::`);
				console.log(`  Timestamp : ${event.timestamp}`);
				console.log(`  Event error : ${event.error || 'unknown'}`);
			}
			else {
				console.log(`[event:log:*] :: ${event}`);
				console.log(`  Timestamp : ${event.timestamp}`);
				console.log(`  Event Tag : ${tags}`);
			}
	});
	Server.events.on(
		'request',
		(request:Hapi.Request, event:Hapi.RequestEvent, tags:any) => {
			if (tags.error) {
				console.log(`[event:request:error] :: ${request.method} ${request.path}`);
				console.log(`  Timestamp : ${event.timestamp}`);
				console.log(`  Event error : ${event.error || 'unknown'}`);
			}
			else {
				console.log(`[event:request:*] :: ${request.method} ${request.path}`);
				console.log(`  Timestamp : ${event.timestamp}`);
				console.log(`  Event Tag : ${tags}`);
			}
	});
	Server.events.on(
		'response',
		(request:Hapi.Request) => {
			console.log('[event:response:*] ::');
			console.log(`  Response sent for request : ${request.method} ${request.path}`);
	});
	Server.events.on(
		'route',
		(route:Hapi.RequestRoute) => {
			console.log('[event:route:*] ::');
			console.log(`  New route added : ${route.method} ${route.path}`);
	});
	Server.events.on('start', () => {
		console.log('[event:start:*] ::');
		console.log('  Server started!!');
	});
	Server.events.on('stop', () => {
		console.log('[event:stop:*] ::');
		console.log('  Server stopped!!');
	});


	/**
	 * API Router
	 */
	Server.route(Routes);
	Server.route({
		method: 'GET',
		path: '/',
		handler: (request:Hapi.Request) => {
			console.log(`[200] :: ${request.method} ${request.path}`);
			return { name: 'hapi-boilerplate-with-ts', version: 'v0.1' };
		}
	});
	Server.route({
		method: 'GET',
		path: '/response-control',
		handler: (request:Hapi.Request, h:Hapi.ResponseToolkit) => {
			console.log(`[200] :: ${request.method} ${request.path}`);
			return h.response('text')
					.type('text/plain')
					.charset('ISO-8859-1')
					.ttl(1000)
					.header('set-cookie', 'abc=123')
					.state('sid', 'abcdefg123456')
					.state('other', 'something', { isSecure: true })
					.unstate('x')
					.header('Content-Type', 'text/plain; something=something')
					.header('vary', 'x-control')
					.header('combo', 'o')
					.header('combo', 'k', { append: true, separator: '-' })
					.header('combo', 'bad', { override: false })
					.code(200)
					.message('Super');
		}
	});
	Server.route({
		method: 'GET',
		path: '/bad-request',
		handler: (request:Hapi.Request) => {
			console.log(`[200] :: ${request.method} ${request.path}`);
			throw Boom.badRequest('Unsupported parameter..!');  // invoke 400-Bad-Request
		}
	});
	Server.route({
		method: 'GET',
		path: '/server-error',
		handler: (request:Hapi.Request) => {
			console.log(`[200] :: ${request.method} ${request.path}`);
			throw new Error('Unexpect error..!');  // invoke 500-Server-Error
		}
	});


	/**
	 * 404 handler
	 */
	Server.route({
		method: '*',
		path: '/{p*}',
		handler: () => {
			return Boom.notFound('Resource Not Found..!');
		}
	});


	/**
	 * Server Start
	 */
  await Server.start().catch(console.log);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
	console.log(`Server running at: ${Server.info.uri}`);

	/**
	 * Redirect Server Start (HTTP → HTTPS)
	 */
	if (HTTPS === true) {
	const RedirectServer = new Hapi.Server({
		address: ADDRESS,
		host: HOST,
		port: PORT_HTTP
	});
	RedirectServer.route({
		method: '*',
		path: '/{p*}',
		handler: (request:Hapi.Request, h:Hapi.ResponseToolkit) => {
			const { method, path, url } = request;
			console.log('[redirect] ::');
			console.log(`  HTTP ${method} ${path} ${url.search}`);
			console.log(`  → HTTPS ${method} ${path} ${url.search}`);
			// return h.redirect(`https://${HOST}${request.path}${url.search}`);
			return h.response()
			.code(307)
			.header('Location', `https://${HOST}${request.path}${url.search}`);
		}
	});
	RedirectServer.start()
		.then(_=>{
			console.log(`RedirectServer running at: ${RedirectServer.info.uri}`);
		})
		.catch(console.log);
	}
};

start();
