'use strict';
const Boom = require('boom');
const { auth } = require('./pre');
const PostService = require('../services/PostService');

module.exports = [
    {
        method: 'GET',
        path: '/data',
        config: {
            pre: [
                auth
            ]
        },
        handler: (request,reply)=>{
            let postId = Math.floor(Math.random()*100);
            PostService.getPost(postId)
            .then((result)=>{
                return reply(result.data);
            })
            .catch((err)=>{
                return reply(Boom.internal('Fetch Data Fail..!'));
            });
        }
    },
];


