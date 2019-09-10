const express = require('express');
const app = express();

// middelware
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// routing
app.get('/', function(req, res){
  res.end('<h1>hello</h1>');
});
app.get('/cookie', function(req, res){
  console.log(req.cookies);
  console.log(typeof(req.cookies));
  console.log(Object.getOwnPropertyNames(req.cookies).length);
  res.send('recieve cookie, thank you!');
});

// server run
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});
