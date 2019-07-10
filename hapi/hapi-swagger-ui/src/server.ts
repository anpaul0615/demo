import Hapi from '@hapi/hapi';
import Boom from '@hapi/boom';
import Inert from '@hapi/Inert';

import { CORS_CONFIG } from './utils/ConfigProvider';
import { SSL_KEY, SSL_CERT } from './utils/SSLKeyProvider';
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
    routes: {
      cors: CORS_CONFIG,
      files: {
        relativeTo: `${__dirname}/../public`
      }},
    router: { stripTrailingSlash: true }
	});
	
  /**
   * Register Static-File-Handler
   */
	await Server.register(Inert);
	
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
