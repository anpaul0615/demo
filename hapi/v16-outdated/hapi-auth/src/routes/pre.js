'use strict';
const Boom = require('boom');
const JWTService = require('../services/JWTService');

/* check access-token */
module.exports.auth = {
    assign: 'auth',
    method: (request,reply)=>{
        const token = request.state['access-token'];
        if(token) {
            JWTService.verify(token)
            .then((decodedToken)=>{
                return reply(decodedToken);
            })
            .catch((err)=>{
                return reply(Boom.unauthorized('Invaild access-token..!'));
            });
        } else {
            return reply(Boom.forbidden('Missing access-token..!'));
        }
    }
};
