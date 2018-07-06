const AWS = require("aws-sdk");
const CONFIG = require("./config.json");

AWS.config.update({
    accessKeyId: CONFIG.accessKeyId,
    secretAccessKey: CONFIG.secretAccessKey,
    region: CONFIG.region,
    endpoint: CONFIG.endpoint
});

// Create SES Object
const SES = new AWS.SES({ apiVersion: '2010-12-01' });

// Create SendEmail Params
const params = {
    Destination: {
        ToAddresses: [
            'paulan@daun.co.kr',
        ]
    },
    Message: {
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test Email'
        },
        Body: {
            Text: {
                Charset: "UTF-8",
                Data: "hello SES :)"
            }
        }
    },
    Source: 'anpaul0615@gmail.com'
};

// Send Email
SES.sendEmail(params).promise()
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.error(err);
    });