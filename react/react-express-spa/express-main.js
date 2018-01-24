const express = require('express');
const app = express();

// set cross domain service
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, X-Requested-With, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// static service
app.use(express.static(__dirname + '/build/', {
  index: false
}));
// api service
app.get('/', function(req,res){
  console.log('HTTP GET /');
  res.redirect('/index.html');
});
app.get('/hello', function(req,res,next){
  console.log('HTTP GET /hello');
  var data = {'message':'nice to meet you'};
  res.json(data);
});


// error-handling
app.use(function(err,req,res,next){
  if(err){
    var msg = '<h1 style="color:red;">500 Error</h1>';
    res.status(500).end(msg);
  }
  else next();
});
app.use(function(req,res,next){
  var msg = '<h1 style="color:red;">404 Error</h1>';
  res.status(404).end(msg);
});

// server listening
app.listen(5000, function(){
  console.log('Conneted 5000 port!');
});
