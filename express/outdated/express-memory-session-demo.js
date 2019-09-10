const express = require('express');
const app = express();

// middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));

// session
const session = require('express-session');
const MemoryStore = new session.MemoryStore();
app.use(session({
  store: MemoryStore,
  secret: 'srd-session-secret',
  saveUninitialized: true,
  resave: true,
  rolling: true,
  cookie:{
    secure: false,
    maxAge: 10 * (1000*60)    /* 1 min == 1*1000*60 */
  }
}));


// route
app.get('/session',function(req,res,next){
  res.end('HTTP GET /session is success..!');
});
app.post('/session',function(req,res,next){
  req.session.userId = req.param.userId;
  req.session.userName = req.param.userName;
  res.end('HTTP POST /session is success..!');
});
app.delete('/session',function(req,res,next){
  req.session.destroy(function(err){
    if(err) return next(err);
    res.clearCookie('connect.sid');
    res.end('HTTP DELETE /session is success..!');
  });
});


// server listening
app.listen(3000, function(){
  console.log('Conneted 3000 port!');
});
