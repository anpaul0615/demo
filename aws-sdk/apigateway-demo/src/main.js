import CognitoClient from './lib/cognito-client';
import APIGatewayClient from './lib/apigateway-client';

(async ()=>{
    try {
        /* Set Signin Data */
        const email = 'xxxx';
        const password = 'yyyy';

        /* Signin */
        const cognitoClient = new CognitoClient();
        const cognitoCredentials = await cognitoClient.getCredentials(email,password);
        const { accessKeyId, secretAccessKey, sessionToken} = cognitoCredentials;
        console.log('accessKeyId, secretAccessKey, sessionToken :: ',
            accessKeyId, secretAccessKey, sessionToken);

        /* Invoke APIGateway */
        const apigwClient = new APIGatewayClient();
        const response = await apigwClient.invokeAPIGateway({
            path: '/test',
            method: 'POST',
            body: {
                a: 1,
                b: 2
            },
        });
        console.log('response :: ', response);

    } catch (e) {
        console.log(e);
    }
})();