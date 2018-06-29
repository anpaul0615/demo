import Express from 'express';
import BodyParser from 'body-parser';

const App = Express();

// middleware
App.use(BodyParser.urlencoded({
    extended: true
}));
App.use(BodyParser.json());

// router
App.get('/', (req, res)=>{
    res.send('<h1>hello aws-serverless-express!!</h1>');
});
App.get('/api', (req, res)=>{
    res.json({ name: 'aws-serverless-express', version: 'v1.0' });
});
App.post('/error/:code', (req, res, next)=>{
    const errorCode = req.params.code || 400;
    next(new Error(`Custom ${errorCode} Error..!`));
});

// 500 handler
App.use((err, req, res, next)=>{
    console.log('============================');
    console.log(['[500] => ', req.protocol, req.method, req.originalUrl].join(' '));
    console.log('============================');
    console.log(err.stack);
    res.status(500).json({ message: err.message || 'Internel Server Error..!' });
});
// 404 handler
App.use((req, res, next)=>{
    console.log('============================');
    console.log(['[404] => ', req.protocol, req.method, req.originalUrl].join(' '));
    console.log('============================');
    res.status(404).json({ message: '[404] Resource Not Found' });
});

export default App;