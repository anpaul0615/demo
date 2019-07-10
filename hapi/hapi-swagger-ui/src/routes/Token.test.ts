import Hapi from '@hapi/Hapi';
import TokenRoutes from './Token';

/* Server-Router Mock */
const Server = new Hapi.Server();
Server.state('X-Access-Token', {
  strictHeader: true,
  ignoreErrors: false,
  isSecure: true,
  isHttpOnly: true,
  isSameSite: 'Strict',
  encoding: 'none',
});
Server.route(TokenRoutes);

/* Request Parameters */
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Public-Token': 'eW91ci1wdWJsaWMtdG9rZW4=',
  'X-Access-Token': '',
};
const user = {
	username: 'Paul An'
};

describe('Auth Router', () => {
	beforeAll(async () => {});
	
	test('Create New Token : POST ~/tokens', async () => {
		const response:Hapi.ServerInjectResponse = await Server.inject({
			method: 'POST',
			url: '/tokens',
			headers,
			payload: user
		});
		expect(response).toBeDefined();
		expect(response.statusCode).toEqual(200);
		const { message, data } = (response.result) as any;
		expect(message).toBeDefined();
		expect(data).toBeDefined();
		const { accessToken, accessTokenData } = data;
		expect(accessToken).toBeDefined();
		headers['X-Access-Token'] = accessToken;
		expect(accessTokenData).toBeDefined();
		expect(accessTokenData.username).toEqual(user.username);
	});
	test('Retrieve New Token : GET ~/tokens/me', async () => {
		const response:Hapi.ServerInjectResponse = await Server.inject({
			method: 'GET',
			url: '/tokens/me',
			headers,
		});
		expect(response).toBeDefined();
		expect(response.statusCode).toEqual(200);
		const { message, data } = (response.result) as any;
		expect(message).toBeDefined();
		expect(data).toBeDefined();
		const { accessToken, accessTokenData } = data;
		expect(accessToken).toBeDefined();
		expect(accessTokenData).toBeDefined();
		expect(accessTokenData.username).toEqual(user.username);
	});

	test('Retrieve New Token : GET ~/tokens/me', async () => {
		const response:Hapi.ServerInjectResponse = await Server.inject({
			method: 'GET',
			url: '/tokens/me',
			headers,
		});
		expect(response).toBeDefined();
		expect(response.statusCode).toEqual(200);
		const { message, data } = (response.result) as any;
		expect(message).toBeDefined();
		expect(data).toBeDefined();
		const { accessToken, accessTokenData } = data;
		expect(accessToken).toBeDefined();
		expect(accessTokenData).toBeDefined();
		expect(accessTokenData.username).toEqual(user.username);
	});

	test('Refresh Token : PUT ~/tokens/me', async () => {
		const response:Hapi.ServerInjectResponse = await Server.inject({
			method: 'PUT',
			url: '/tokens/me',
			headers,
		});
		expect(response).toBeDefined();
		expect(response.statusCode).toEqual(200);
		const { message, data } = (response.result) as any;
		expect(message).toBeDefined();
		expect(data).toBeDefined();
		const { accessToken, accessTokenData } = data;
		expect(accessToken).toBeDefined();
		expect(accessTokenData).toBeDefined();
		expect(accessTokenData.username).toEqual(user.username);
	});

	test('Delete Token : DELETE ~/tokens/me', async () => {
		const response:Hapi.ServerInjectResponse = await Server.inject({
			method: 'DELETE',
			url: '/tokens/me',
			headers,
		});
		expect(response).toBeDefined();
		expect(response.statusCode).toEqual(200);
	});
	
  afterAll(async () => {});
});
