import COGNITO_CONFIG from '../config/aws.cognito.json';
import AWS from 'aws-sdk';
import { 
    CognitoUser,
    CognitoUserPool,
    AuthenticationDetails
} from 'amazon-cognito-identity-js';


/* Init Access Configuration */
AWS.config.region = COGNITO_CONFIG.region;

/* Set Register Data */
const userName = 'xxxx';
const password = 'yyyy';

/* Init CognitoUserPool */
const userPool = new CognitoUserPool({
    UserPoolId: COGNITO_CONFIG.UserPoolId,
    ClientId: COGNITO_CONFIG.ClientId,
});

/* Init CognitoUser */
const cognitoUser = new CognitoUser({
    Username : userName,
    Pool : userPool
});

/* Init AuthenticationDetails */
const authenticationDetails = new AuthenticationDetails({
    Username : userName,
    Password : password,
});

/* Signin */
cognitoUser.authenticateUser(authenticationDetails,{
    onSuccess: (result)=>{
        console.log(result);
        console.log('accessToken(jwt) : ' + result.getAccessToken().getJwtToken());
        console.log('idToken(jwt) : ' + result.idToken.jwtToken);
        
        // Init DynomoDB Access Configuration (by Cognito-AccessToken)
        const idToken = result.getIdToken().getJwtToken();
        const cognitoIDP = `cognito-idp.${COGNITO_CONFIG.region}.amazonaws.com/${COGNITO_CONFIG.UserPoolId}`;
        const cognitoCredentialsLogins = {};
        cognitoCredentialsLogins[cognitoIDP] = idToken;
        const cognitoCredentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: COGNITO_CONFIG.IdentityPoolId,
            Logins : cognitoCredentialsLogins
        });
        // Read DynamoDB (by Cognito-AccessToken)
        const docClient = new AWS.DynamoDB({
            credentials: cognitoCredentials,
            endpoint: `https://dynamodb.${COGNITO_CONFIG.region}.amazonaws.com`
        })
        docClient.listTables(null, (err,data)=>{
            if (err) {
                console.log({
                    message: '[Fail] Get Tables Fail..!',
                    data,
                    err
                });
            } else {
                console.log({
                    message: '[Done] Get Tables OK!!',
                    data,
                    err
                });
            }
        });
    },
    onFailure: (err)=>{
        console.log('[error] :: ');
        console.log(err.message || JSON.stringify(err));
    }
});