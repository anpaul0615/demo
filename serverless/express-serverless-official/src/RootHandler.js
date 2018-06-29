import awsServerlessExpress from 'aws-serverless-express';
import App from './App';

const Server = awsServerlessExpress.createServer(App);
console.log('Init Server ok!!');

export default (event, context)=>{
    return awsServerlessExpress.proxy(Server, event, context);
}