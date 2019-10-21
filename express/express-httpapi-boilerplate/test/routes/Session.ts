import Chai, { expect } from 'chai';
import ChaiHttp  from 'chai-http';
import Server from '../../src/Server';

const { SERVER_PUBLIC_TOKEN } = process.env;


describe('Routes.Session', () => {
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
    // add login user
    await Chai.request(Server)
      .post('/users')
      .set(headers)
      .send(USER);
  });

  context('POST ~/sessions', () => {
    it('Login Success Case', async () => {
      // request
      const response = await Chai.request(Server)
        .post('/sessions')
        .set(headers)
        .send({
          id: USER.id,
          password: USER.password
        });
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

    it('Login Fail Case (not registered id)', async () => {
      // request
      const response = await Chai.request(Server)
        .post('/sessions')
        .set(headers)
        .send({
          id: USER.id + '123',
          password: USER.password
        });
      // check response
      expect(response.status).to.equal(400);
      expect(response.body).has.nested.property('error');
      expect(response.body.error).to.equal('Bad Request');
    });

    it('Login Fail Case (not matched password)', async () => {
      // request
      const response = await Chai.request(Server)
        .post('/sessions')
        .set(headers)
        .send({
          id: USER.id,
          password: USER.password + '123'
        });
      // check response
      expect(response.status).to.equal(401);
      expect(response.body).has.nested.property('error');
      expect(response.body.error).to.equal('Unauthorized');
    });
  });

  context('PUT ~/sessions', () => {
    it('Refresh Session Token', async () => {
      // request
      const response = await Chai.request(Server)
        .put('/sessions')
        .set(headers)
        .send({
          id: USER.id,
          password: USER.password
        });
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

  context('DELETE ~/sessions', () => {
    it('Logout Success Case', async () => {
      // request
      const response = await Chai.request(Server)
        .delete('/sessions')
        .set(headers)
        .send();
      // check response
      expect(response.status).to.equal(200);
    });

    it('Logout Fail Case (invalid X-Access-Token)', async () => {
      // request
      const response = await Chai.request(Server)
        .delete('/sessions')
        .set({
          ...headers,
          'X-Access-Token': headers['X-Access-Token'] + 123
        })
        .send();
      // check response
      expect(response.status).to.equal(401);
      expect(response.body).has.nested.property('error');
      expect(response.body.error).to.equal('Unauthorized');
    });
  });

  after(async () => {
    // add login user
    await Chai.request(Server)
      .delete('/users/me')
      .set(headers)
      .send();
  });
});
