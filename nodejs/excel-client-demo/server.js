const express = require('express');
const app = express();

//middelware
const bodyParser = require('body-parser')
app.use(bodyParser.text({ type:'*/xml' }));
app.use(bodyParser.json({ type:'*/json' }));

//server-init
app.listen(8888, function(){
    console.log('Sever is Conneted 8888 port!');
});

//routing
app.post('/xml',  function(req, res){
    getRequestInformation(req);
    res.send("XML Returned!! \n");
    res.end();
});
app.post('/json', function(req, res){
    getRequestInformation(req);
    res.send("Json Returned!! \n");
    res.end();
});

//show request info
function getRequestInformation(req){
    console.log("======================");
    console.log("[Server]");
    console.log("Protocol :: " + req.protocol);
    console.log("Host :: " + req.hostname);
    console.log("Path :: " + req.path);
    console.log("Method :: " + req.method);
    console.log("Content-Type :: " + req.get('Content-Type'));
    console.log("======================");
    console.log("[Client]");
    console.log("IP :: " + req.hostname);
    console.log("User-Agent :: " + req.headers['user-agent']);
    console.log("Headers :: " + JSON.stringify(req.headers));
    console.log("======================");
    console.log("[Body]");
    console.log((req.path == '/json')? JSON.stringify(req.body) : req.body);
}
