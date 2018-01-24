const express = require('express');
const app = express();

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


// error-handling
app.use(function(err,req,res,next) {
  if(err){
    var msg = '<h1 style="color:red;">'+ JSON.stringify(err.message) +'</h1>';
    console.log(err.stack);
    res.status(500).end(msg);
  }
  else next();
});
app.use(function(req,res) {
  res.status(404).end('<h1 style="color:red;">I am 404 Error</h1>');
});

// server listening
app.listen(3000, function(){
  console.log('Conneted 3000 port!');
});
