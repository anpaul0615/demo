'use strict';
const jwt = require('jsonwebtoken');
const { secret, signOption, verifyOption } = require('../config/jwt.json');

/**
 * Create Token
 */
module.exports.create = (data)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(data, secret, signOption, (err,token)=>{
            if(err) reject(err);
            else resolve(token);
        });
    });
};

/**
 * Verify Token
 */
module.exports.verify = (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token, secret, verifyOption, (err,decoded)=>{
            if(err) reject(err);
            else resolve(decoded);
        });
    });
};