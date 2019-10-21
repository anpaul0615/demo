import Chai, { expect } from 'chai';
import ChaiHttp  from 'chai-http';
import Server from '../../src/Server';

const { SERVER_PUBLIC_TOKEN } = process.env;


describe('Routes.User', () => {
  let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Public-Token': SERVER_PUBLIC_TOKEN,
    'X-Access-Token': '',
  };

  const USER = {
    id: `testuser${(new Date).getMilliseconds()}`,
    password: 'password123',
    name: '테스트사용자'
  };

  before(async () => {
    Chai.use(ChaiHttp);
  });

  context('POST ~/Users', () => {
    it('User Add Success Case', async () => {
      // request
      const response = await Chai.request(Server)
        .post('/users')
        .set(headers)
        .send(USER);
      // check response
      expect(response.status).to.equal(200);
      expect(response.body).has.nested.property('data');
      expect(response.body).has.nested.property('data.accessToken');
      expect(response.body).has.nested.property('data.accessTokenData');
      // update access-token
      const { accessToken } = response.body.data;
      headers['X-Access-Token'] = accessToken;
      expect(headers['X-Access-Token']).to.equal(accessToken);
    });
  });

  context('GET ~/Users/me', () => {
    it('User Retreive Success Case', async () => {
      // request
      const response = await Chai.request(Server)
        .get('/users/me')
        .set(headers)
        .send();
      // check response
      expect(response.status).to.equal(200);
      expect(response.body).has.nested.property('data');
      expect(response.body).has.nested.property('data.user');
      expect(response.body).has.nested.property('data.user.id');
      expect(response.body).has.nested.property('data.user.name');
    });
  });

  context('PUT ~/Users/me', () => {
    it('User Data Update Success Case', async () => {
      const updateUserData = {
        name: '테스트사용자222'
      };
      // request
      const response = await Chai.request(Server)
        .put('/users/me')
        .set(headers)
        .send(updateUserData);
      // check response
      expect(response.status).to.equal(200);
      expect(response.body).has.nested.property('data');
      expect(response.body).has.nested.property('data.accessToken');
      expect(response.body).has.nested.property('data.accessTokenData');
    });
    
    it('User Password Update Success Case', async () => {
      const updateUserData = {
        password: 'passw0rd!@#'
      };
      // request
      const response = await Chai.request(Server)
        .put('/users/me')
        .set(headers)
        .send(updateUserData);
      // check response
      expect(response.status).to.equal(200);
      expect(response.body).has.nested.property('data');
      expect(response.body).has.nested.property('data.accessToken');
      expect(response.body).has.nested.property('data.accessTokenData');
    });
  });

  context('DELETE ~/Users/me', () => {
    // request
    it('User Delete Success Case', async () => {
      const response = await Chai.request(Server)
        .delete('/users/me')
        .set(headers)
        .send();
      // check response
      expect(response.status).to.equal(200);
      expect(response.body).not.has.nested.property('data');
    });
  });

  after(async () => {});
});
