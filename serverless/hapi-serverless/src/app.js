import Server from './server';

export const handler = (event, context, callback) => {
    // map lambda event to hapi request
    const options = {
        method: event.httpMethod,
        url: event.path,
        payload: event.body,
        headers: event.headers,
        validate: false,
    };
    // injection to hapi
    Server.inject(options, function(res){
        const response = {
            statusCode: res.statusCode,
            body: (typeof res.result === "string") ? res.result : JSON.stringify(res.result),
            headers: {
                'content-type': res.headers['content-type'],
            },
        };
        console.log(response);
        callback(null, response);
    });
};