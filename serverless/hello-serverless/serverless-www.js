export const Home = (event, context, callback) => {
  return callback(null, {
    statusCode: '200',
    body: '<h1>Hello Serverless Home!!</h1>',
    headers: {
        'Content-Type': 'text/html',
    },
  });
};
