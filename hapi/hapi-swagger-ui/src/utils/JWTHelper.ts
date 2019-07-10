import JWT from 'jsonwebtoken';
import JWTConfig from '../../conf/jwt.json';

const { secret, signOption, verifyOption } = JWTConfig;

export const createToken = (data:any) => {
  return new Promise((resolve,reject) => {
    if (!data) return reject(new Error('Missing Token Data..!'));
    JWT.sign(data, secret, signOption, (err,token)=>{
      if (err) reject(err);
      else resolve(token);
    });
  });
};

export const verifyToken = (token:string) => {
  return new Promise((resolve,reject) => {
    JWT.verify(token, secret, verifyOption, (err,decoded)=>{
      if (err) reject(err);
      else resolve(decoded);
    });
  });
};
