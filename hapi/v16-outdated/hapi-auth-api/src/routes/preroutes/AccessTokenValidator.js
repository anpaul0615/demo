import Boom from 'boom';

/* check access-token from cookie */
export const checkFromCookie = {
    assign: 'accessTokenFromCookie',
    method: async (request,reply)=>{
        const { JWT } = request.server.app.services;

        const token = request.state['access-token'];
        if(!token)
            return reply(Boom.forbidden('Missing access-token..!'));

        try {
            // decode JWT
            const tokenData = await JWT.verify(token)
                .catch(err=>Boom.unauthorized('Invaild access-token..!', err));
            // return token-data
            console.log('AccessTokenValidator.checkFromCookie :: ok');
            reply({ tokenData, token });
        } catch(err) {
            console.log('AccessTokenValidator.checkFromCookie :: err..!');
            reply(err);
        }
    }
};

/* check access-token from headers */
export const checkFromHeader = {
    assign: 'accessTokenFromHeader',
    method: async (request,reply)=>{
        const { JWT } = request.server.app.services;
        
        const token = request.headers['access-token'];
        if(!token)
            return reply(Boom.forbidden('Missing access-token..!'));
            
        try {
            // decode JWT
            const tokenData = await JWT.verify(token)
                .catch(err=>Boom.unauthorized('Invaild access-token..!', err));
            // return token-data
            console.log('AccessTokenValidator.checkFromHeader :: ok');
            reply({ tokenData, token });
        } catch(err) {
            console.log('AccessTokenValidator.checkFromHeader :: err..!');
            reply(err);
        }
    }
};
