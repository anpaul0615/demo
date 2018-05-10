const AWS = require("aws-sdk");
const CONFIG = require("./config.json");

const { accessKeyId, secretAccessKey } = CONFIG;
const cred = new AWS.Credentials(accessKeyId, secretAccessKey, null);
cred.get((err)=>{
    if(err) console.log(err);
});

console.log(cred);

