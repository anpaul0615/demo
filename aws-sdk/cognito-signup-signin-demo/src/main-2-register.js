import COGNITO_CONFIG from '../config/aws.cognito.json';
import AWS from 'aws-sdk';
import { 
    CognitoUser,
    CognitoUserPool
} from 'amazon-cognito-identity-js';


/* Init Access Configuration */
AWS.config.region = COGNITO_CONFIG.region;
AWS.Config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: COGNITO_CONFIG.IdentityPoolId
});

/* Set Register Data */
const userName = 'xxxx';
const activateCode = 'yyyy';

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

/* Register */
cognitoUser.confirmRegistration(activateCode, true, (err,result)=>{
    if (err) {
        console.log(err);
        console.log('[error] :: ');
        console.log(err.message || JSON.stringify(err));
        return;
    }
    console.log(result);
    console.log('call result: ' + result);
});

// /* (opt) Resend ActivateCode */
// cognitoUser.resendConfirmationCode((err,result)=>{
//     if (err) {
//         console.log('[error] :: ');
//         alert(err.message || JSON.stringify(err));
//         return;
//     }
//     console.log(result);
//     console.log('call result: ' + result);
// });