'use strict';
const axios = require('axios');

/**
 * Get Post
 */
module.exports.getPost = (postId)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};