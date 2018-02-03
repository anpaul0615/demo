export default (event, context, callback)=>{
    /** Immediate response for WarmUP plugin */
    if (event.source === 'serverless-plugin-warmup') {
        console.log('[HelloHandler] warmup ok!!');
        return callback(null, 'Lambda is warm!!');
    }

    const response = {
        code: 200,
        message: 'hello serverless'
    };
    console.log('[HelloHandler] HTTP GET /hello :: ok!!');
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
};