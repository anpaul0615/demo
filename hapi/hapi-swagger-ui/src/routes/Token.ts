import Hapi from '@hapi/hapi';
import Boom from '@hapi/boom';
import {
	checkAccessTokenFromHeader,
	checkPublicTokenFromHeader,
	checkUserPropertiesFromBody,
} from '../preroutes';
import * as JWTHelper from '../utils/JWTHelper';

export default [
	/**
	 * Create New Token
	 */
	{
		method: 'POST',
		path: '/tokens',
		options: {
			pre: [
				checkPublicTokenFromHeader,
				checkUserPropertiesFromBody,
			]
		},
		handler: async (request:Hapi.Request)=>{
			const { username } = request.pre.checkUserPropertiesFromBody;
			try {
				const accessTokenData = { username };
				const accessToken = await JWTHelper.createToken(accessTokenData);
				return {
					message: 'Generate Token Success!!',
					data: {
						accessToken,
						accessTokenData
					}};
			} catch(err) {
				return Boom.internal('Generate Token Fail..!');
			}
		}
	},
	/**
	 * Retrieve Token-Data
	 */
	{
		method: 'GET',
		path: '/tokens/me',
		options: {
			pre: [
				checkAccessTokenFromHeader,
				// checkAccessTokenFromCookie
			]
		},
		handler: (request:Hapi.Request)=>{
			const { accessToken, accessTokenData } = request.pre.checkAccessTokenFromHeader;
			return {
				message: 'Retrieve Token Success!!',
				data: {
					accessToken,
					accessTokenData
				}};
		}
	},
	/**
	 * Refresh Token
	 */
	{
		method: 'PUT',
		path: '/tokens/me',
		options: {
			pre: [
				checkPublicTokenFromHeader,
				checkAccessTokenFromHeader,
				// checkAccessTokenFromCookie
			]
		},
		handler: async (request:Hapi.Request) => {
			const { accessTokenData } = request.pre.checkAccessTokenFromHeader;
			try {
				const newAccessTokenData = { username: accessTokenData.username };
				const newAccessToken = await JWTHelper.createToken(newAccessTokenData);
				return {
					message: 'Refresh Token Success!!',
					data: {
						accessToken: newAccessToken,
						accessTokenData: newAccessTokenData
					}};
			} catch(err) {
				return Boom.internal('Refresh Token Fail..!');
			}
		}
	},
	/**
	 * Refresh Token
	 */
	{
		method: 'DELETE',
		path: '/tokens/me',
		options: {
			pre: [
				checkPublicTokenFromHeader,
				checkAccessTokenFromHeader,
				// checkAccessTokenFromCookie
			]
		},
		handler: () => {
			// something todo
			return { msg:'Delete Token Success!!' };
		}
	},
];
