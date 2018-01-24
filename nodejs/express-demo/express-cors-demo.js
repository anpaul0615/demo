const express = require('express');
const app = express();

// set cors-options
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, X-Requested-With, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// routing
app.get('/', function(req, res){
  res.end('<h1>hello</h1>');
});
app.get('/cors', function(req, res){
  var data = {
    message: "HTTP GET / is success"
  };
  res.json(data);
});
app.post('/cors', function(req, res){
  var data = {
    message: "HTTP POST / is success"
  };
  res.json(data);
});
app.delete('/cors', function(req, res){
  var data = {
    message: "HTTP DELETE / is success"
  };
  res.json(data);
});


// server run
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});
