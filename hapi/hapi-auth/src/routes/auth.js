'use strict';
const Boom = require('boom');
const { auth } = require('./pre');
const JWTService = require('../services/JWTService');

module.exports = [
    /**
     * Get Token Info
     */
    {
        method: 'GET',
        path: '/tokens/me',
        config: {
            pre: [
                auth
            ]
        },
        handler: (request,reply)=>{
            let decoded_token = request.pre.auth;
            return reply(decoded_token);
        }
    },
    /**
     * Get New Token
     */
    {
        method: 'GET',
        path: '/tokens/new',
        handler: (request,reply)=>{
            // Get User-Data
            let data = {
                userId: 'foo',
                userName: 'bar',
                scope: 'admin'
            };
            // Generate JWT
            JWTService.create(data)
            .then((token)=>{
                return reply(`token is :: ${token}`)
                    .state('access-token', token);
            })
            .catch((err)=>{
                return reply(Boom.internal('Generate Token Fail..!'));
            });
        }
    },
];

