import jwt from 'jsonwebtoken';

export default function(jwtConfig){
    const { 
        secret, signOption, verifyOption 
    } = jwtConfig;

    /* functions */
    const jwtService = {
        // create Token
        create: (data)=>{
            return new Promise((resolve,reject)=>{
                if(!data) return reject(new Error('Missing JWT-Data..!'));
                jwt.sign(data, secret, signOption, (err,token)=>{
                    if(err) reject(err);
                    else resolve(token);
                });
            });
        },
        // Verify Token
        verify: (token)=>{
            return new Promise((resolve,reject)=>{
                jwt.verify(token, secret, verifyOption, (err,decoded)=>{
                    if(err) reject(err);
                    else resolve(decoded);
                });
            });
        },
    };

    return jwtService;
};