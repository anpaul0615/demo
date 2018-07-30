import * as COGNITO_CONFIG from './config/aws.cognito.json';
import * as IOT_CONFIG from './config/aws.iot.json';
import AWSIoTDeviceSDK from 'aws-iot-device-sdk';
import CognitoClient from './lib/cognito-client';

global.fetch = require('node-fetch');

const username = 'anpaul0615';
const password = '#a123456789';
const clientID = 'testuser';
const topic = 'test';

(async ()=>{

    // Set Cognito Credentials
    const cognitoClient = new CognitoClient(username,password);
    const cognitoCredentials = await cognitoClient.getCredentials();
    const { accessKeyId, secretAccessKey, sessionToken } = cognitoCredentials;

    // Init IoT Client
    const mqttClient = AWSIoTDeviceSDK.device({
        region: IOT_CONFIG.region,
        host: IOT_CONFIG.endpoint,
        clientId: clientID,
        protocol: 'wss',
        maximumReconnectTimeMs: 5000,
        debug: true,
        accessKeyId: accessKeyId,
        secretKey: secretAccessKey,
        sessionToken: sessionToken
    });

    // Set IoT Client Event Listener
    mqttClient.on('connect', (result)=>{
        console.log('event#connect..');
        console.log(result);
        mqttClient.subscribe(topic);
    });
    mqttClient.on('reconnect', (result)=>{
        console.log('event#reconnect..');
        console.log(result);
    });
    mqttClient.on('message', (result)=>{
        console.log('event#message..');
        console.log(result);
    });
    mqttClient.on('offline', (result) => {
        console.log('event#offline..');
        console.log(result);
    });
    mqttClient.on('error', (err) => {
        console.log('event#error..');
        console.log(err);
    });
    mqttClient.on('message', (topic, message) => {
        console.log('event#message..');
        console.log('> topic : ', topic.toString());
        console.log('> message : ', message.toString());
    });
    
})();