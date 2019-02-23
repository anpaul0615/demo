import Hapi from '@hapi/hapi';
import Boom from '@hapi/boom';
import Joi from '@hapi/joi';
import * as JWTHelper from '../utils/JWTHelper';
import * as ConfigProvider from '../utils/ConfigProvider';


/**
 * Token-Properties Schema
 */
export const LICENSE_KEY_SCHEMA
  = Joi.string().regex(/^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}$/)
    .error(new Error('라이센스키 속성값이 유효하지 않습니다.'));


/**
 * Token Properties Validate Function
 */
export const checkPublicTokenFromHeader = {
  assign: 'checkPublicTokenFromHeader',
  method: (request:Hapi.Request) => {
    const { API_CONFIG:{ publicRequestToken } } = ConfigProvider;
    const publicToken = request.headers['x-public-token'];
    if (!publicToken) {
      return Boom.forbidden('X-Public-Token 이 누락되었습니다..!');
    }
    const decodedPublicToken = Buffer.from(publicToken,'base64').toString();
    if (decodedPublicToken !== publicRequestToken) {
      return Boom.forbidden('유효하지 않은 X-Public-Token 입니다..!');
    }
    return { publicToken: decodedPublicToken };
  }
};
export const checkAccessTokenFromHeader = {
  assign: 'checkAccessTokenFromHeader',
  method: async (request:Hapi.Request) => {
    const accessToken = request.headers['x-access-token'];
    if (!accessToken) {
      return Boom.badRequest('X-Access-Token 이 누락되었습니다..!');
    }
    try {
      const decodedAccessToken = await JWTHelper.verifyToken(accessToken);
      return {
        accessToken,
        accessTokenData: decodedAccessToken
      };
    } catch(err) {
      return Boom.unauthorized('유효하지 않은 X-Access-Token 입니다..!');
    }
  }
};
export const checkLicenseKeyFromBody = {
  assign: 'checkLicenseKeyFromBody',
  method: async (request:Hapi.Request) => {
    try {
      const { licenseKey } = (request.payload) as any;
      const validationSchema = LICENSE_KEY_SCHEMA.required();
      await Joi.validate(licenseKey, validationSchema);
      return { licenseKey };
    } catch(err) {
      return Boom.badRequest(err.message);
    }
  }
};
