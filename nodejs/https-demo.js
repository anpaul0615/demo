const http = require('http');
const https = require('https');
const fs = require('fs');

const express = require('express');
const app = express();

const http_port = 80;
const https_port = 443;
const https_options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};


// pre-routing
app.use((req,res,next)=>{
  console.log('===================');
  console.log(req.protocol);
  console.log(req.path);
  console.log(req.secure);
  console.log('===================');
  next();
})

// routing
app.get('/',(req,res,next)=>{
  res.end('<h1>Welcome</h1>');
})
app.get('/hello',(req,res,next)=>{
  res.end('<h3>hellohello</h3>');
})
app.get('/err',(req,res,next)=>{
  next(new Error('I am 500 Error'));
})

// listen
http.createServer(app).listen(http_port,function(){
    console.log('[80] http is running..!');
});
https.createServer(https_options, app).listen(https_port,function(){
    console.log('[443] https is running..!');
});
