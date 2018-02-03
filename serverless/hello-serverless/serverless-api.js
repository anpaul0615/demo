export const Hello = (event, context, callback) => {
  //console.log('Received event:', JSON.stringify(event, null, 2));

  const done = (err, res) => callback(null, {
      statusCode: err ? '400' : '200',
      body: err ? err.message : JSON.stringify(res),
      headers: {
          'Content-Type': 'application/json',
      },
  });
  switch (event.httpMethod) {
    case 'GET':
        done(null, 'Hello Serverless HTTP GET!!');
        break;
    case 'POST':
        done(null, 'Hello Serverless HTTP POST!!');
        break;
    case 'PUT':
        //todo
        break;
    case 'DELETE':
        //todo
        break;
    default:
        done(new Error(`Unsupported method "${event.httpMethod}"`));
  }
};