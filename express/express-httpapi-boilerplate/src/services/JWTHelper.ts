import JWT from 'jsonwebtoken';

const {
  JWT_SIGNOPTION_ALGORITHM, JWT_SIGNOPTION_EXPIRESIN,
  JWT_VERIFYOPTION_ALGORITHMS, JWT_SECRET
} = process.env;


export const createAccessToken = (data:any) => {
  return new Promise((resolve,reject) => {
    if (!data) return reject(new Error('Missing Token Data..!'));
    JWT.sign(data, JWT_SECRET,
      {
        algorithm: JWT_SIGNOPTION_ALGORITHM,
        expiresIn: JWT_SIGNOPTION_EXPIRESIN
      },
      (err,token)=>{
        if (err) reject(err);
        else resolve(token);
      });
  });
};

export const verifyAccessToken = (token:string) => {
  return new Promise((resolve,reject) => {
    JWT.verify(token, JWT_SECRET,
      {
        algorithms: JSON.parse(JWT_VERIFYOPTION_ALGORITHMS),
      },
      (err,decoded)=>{
        if (err) reject(err);
        else resolve(decoded);
      });
  });
};
