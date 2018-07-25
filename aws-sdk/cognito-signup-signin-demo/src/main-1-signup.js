import COGNITO_CONFIG from '../config/aws.cognito.json';
import AWS from 'aws-sdk';
import { 
    CognitoUserPool, 
    CognitoUserAttribute
} from 'amazon-cognito-identity-js';


/* Init Access Configuration */
AWS.config.region = COGNITO_CONFIG.region;
AWS.Config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: COGNITO_CONFIG.IdentityPoolId
});

/* Set Signup Data */
const email = 'xxxx@example.com';
const password = 'yyyy';
const name = email.split('@')[0];

/* Init CognitoUserPool */
const userPool = new CognitoUserPool({
    UserPoolId: COGNITO_CONFIG.UserPoolId,
    ClientId: COGNITO_CONFIG.ClientId,
});

/* Signup */
const attributeList = [
    new CognitoUserAttribute({
        Name: 'email',
        Value: email,
    }),
    new CognitoUserAttribute({
        Name: 'name',
        Value: name,
    })
];
userPool.signUp(name, password, attributeList, null, (err,result)=>{
    if (err) {
        console.log(err);
        console.log('[error] :: ');
        console.log(err.message || JSON.stringify(err));
        return;
    }
    console.log(result);
    console.log('user name is ' + result.user.getUsername());
});