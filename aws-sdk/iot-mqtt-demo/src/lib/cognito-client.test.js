import CognitoClient from './cognito-client';
import * as log from 'loglevel';

describe.skip('CognitoClient', () => {
    CognitoClient.default = jest.fn();
    const oldLogLevel = log.getLevel();

    beforeAll(() => {
        // log.setLevel('silent');
        log.setLevel('debug');
    });

    afterAll(() => {
        log.setLevel(oldLogLevel);
    });

    describe('Init New Cognito Client', () => {
        it('creates a new instance by username/password', async ()=>{
            const username = 'anpaul0615';
            const password = '#a123456789';
            const cognitoClient = new CognitoClient(username,password);
            const cognitoCredentials = await cognitoClient.getCredentials();
            
            expect(cognitoCredentials).toHaveProperty('accessKeyId');
            expect(cognitoCredentials).toHaveProperty('secretAccessKey');
            expect(cognitoCredentials).toHaveProperty('sessionToken');
        });
    });
});