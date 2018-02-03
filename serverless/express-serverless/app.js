import Serverless from 'serverless-http';
import Express from 'express';
import BodyParser from 'body-parser';

const App = Express();

// middleware
App.use(BodyParser.urlencoded({
    extended: true
}));
App.use(BodyParser.json());

// router
App.get('/', function (req, res) {
  res.send('<h1>hello express-serverless!!</h1>');
});
App.get('/api', function (req, res) {
  res.json({ name: 'express-serverless', version: 'v1.0' });
});
App.post('/error/:code', function (req, res, next) {
  const errorCode = req.params.code || 400;
  next(new Error(`Custom ${errorCode} Error..!`));
});

// error-handler
App.use(function(err, req, res, next) {
  console.log('============================');
  console.log(['[500] => ', req.protocol, req.method, req.originalUrl].join(' '));
  console.log('============================');
  console.log(err.stack);
  res.status(500).json({ message: err.message || 'Internel Server Error..!' });
});
// 404-handler
App.use(function(req, res, next) {
  console.log('============================');
  console.log(['[404] => ', req.protocol, req.method, req.originalUrl].join(' '));
  console.log('============================');
  res.status(404).json({ message: '[404] Resource Not Found' });
});


export const handler = Serverless(App);