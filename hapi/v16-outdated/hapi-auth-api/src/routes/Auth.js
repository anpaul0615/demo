import Boom from 'boom';
import * as AccessTokenValidator from './preroutes/AccessTokenValidator';
import * as RequestKeyValidator from './preroutes/RequestKeyValidator';
import * as JWTService from '../services/JWTService';

export default [
    /**
     * Get Token Data
     */
    {
        method: 'GET',
        path: '/tokens/me',
        config: {
            pre: [
                AccessTokenValidator.checkFromHeader
            ]
        },
        handler: (request,reply)=>{
            let { token, tokenData } = request.pre.accessTokenFromHeader;
            return reply({ msg:'Validate Token Success!!', token, tokenData });
        }
    },
    /**
     * Create New Token
     */
    {
        method: 'GET',
        path: '/tokens/new',
        config: {
            pre: [
                RequestKeyValidator.checkFromHeader
            ]
        },
        handler: (request,reply)=>{
            const { JWT } = request.server.app.services;
            //const requestKey = request.pre.requestKey;

            // Generate JWT
            JWT.create({user:'test-user'}).then((token)=>{
                return reply({ msg:'Generate Token Success!!', token });
            })
            .catch((err)=>{
                return reply(Boom.internal('Generate Token Fail..!'));
            });
        }
    },
];

