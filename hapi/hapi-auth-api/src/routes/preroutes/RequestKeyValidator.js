import Boom from 'boom';

/* check access-token from headers */
export const checkFromHeader = {
    assign: 'requestKey',
    method: async (request,reply)=>{
        const { JWT } = request.server.app.services;
        
        // check params
        const requestKey = request.headers['request-key'];
        if(!requestKey)
            return reply(Boom.forbidden('Missing request-key..!'));

        // decode
        const permitData = 'permit-data';
        const decoded = new Buffer(requestKey,'base64').toString();
        if(decoded !== permitData)
            return reply(Boom.forbidden('Invaild request-key..!'));
        
        // return request-key
        reply(decoded);
    }
};
