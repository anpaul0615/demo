import { expect } from 'chai';
import {
  USER_ID_SCHEMA, USER_PASSWORD_SCHEMA,
  USER_NAME_SCHEMA, USER_CONTACT_SCHEMA, USER_ADDRESS_SCHEMA,
} from '../../src/models/User.Schema';


describe('Models.User.Schema', () => {
  before(async () => { });

  context('USER_ID_SCHEMA', () => {
    it('should be string & alphabet & number & 4-to-20-length limit', async () => {
      const validIDs = [ 'test', 'testuser001', 'testuserforchematest' ];
      const validTests = validIDs.map((id:any) => {
        return USER_ID_SCHEMA.validate(id).then((r:string) => {
          expect(r).to.equal(id);
        });
      });
      await Promise.all(validTests);
      const invalidIDs = [ 'testuser001!@#', '테스트아이디', 123 ];
      const invalidTests = invalidIDs.map((id:any) => {
        return USER_ID_SCHEMA.validate(id).catch(e=>e).then((r:any) => {
          expect(r.name).to.equal('ValidationError');
          expect(r.value).to.equal(id);
        });
      });
      await Promise.all(invalidTests);
    });
  });

  context('USER_PASSWORD_SCHEMA', () => {
    it('should be string & alphabet & number & special-char & 8-to-20-length limit', async () => {
      const validPasswords = [ 'passw0rd', 'passw0rd!@#', 'passw0rd!@#passw0rd' ];
      const validTests = validPasswords.map((id:any) => {
        return USER_PASSWORD_SCHEMA.validate(id).then((r:string) => {
          expect(r).to.equal(id);
        });
      });
      await Promise.all(validTests);
      const invalidPasswords = [ 'psswd', '테스트비밀번호123', 12345678 ];
      const invalidTests = invalidPasswords.map((id:any) => {
        return USER_PASSWORD_SCHEMA.validate(id).catch(e=>e).then((r:any) => {
          expect(r.name).to.equal('ValidationError');
          expect(r.value).to.equal(id);
        });
      });
      await Promise.all(invalidTests);
    });
  });

  context('USER_NAME_SCHEMA', () => {
    it('should be string & 2-to-10-length limit', async () => {
      const validNames = [ 'Test User', '테스트 유저' ];
      const validTests = validNames.map((id:any) => {
        return USER_NAME_SCHEMA.validate(id).then((r:string) => {
          expect(r).to.equal(id);
        });
      });
      await Promise.all(validTests);
      const invalidNames = [ 'testuser.testuser.testuser.testuser' ];
      const tests = invalidNames.map((id:any) => {
        return USER_NAME_SCHEMA.validate(id).catch(e=>e).then((r:any) => {
          expect(r.name).to.equal('ValidationError');
          expect(r.value).to.equal(id);
        });
      });
      await Promise.all(tests);
    });
  });

  context('USER_CONTACT_SCHEMA', () => {
    it('should be string & 0-to-100-length limit', async () => {
      const validContacts = [ 'testuser@company.com', '010-0000-0000' ];
      const validTests = validContacts.map((id:any) => {
        return USER_CONTACT_SCHEMA.validate(id).then((r:string) => {
          expect(r).to.equal(id);
        });
      });
      await Promise.all(validTests);
      const invalidContacts = [
        `
        testcontact.testcontact.testcontact
        testcontact.testcontact.testcontact
        testcontact.testcontact.testcontact
        `
      ];
      const invalidTests = invalidContacts.map((id:any) => {
        return USER_CONTACT_SCHEMA.validate(id).catch(e=>e).then((r:any) => {
          expect(r.name).to.equal('ValidationError');
          expect(r.value).to.equal(id);
        });
      });
      await Promise.all(invalidTests);
    });
  });

  context('USER_ADDRESS_SCHEMA', () => {
    it('should be string & 0-to-100-length limit', async () => {
      const validAddresses = [
        `1, Cheongwadae-ro, Jongno-gu, Seoul, 03048, Rep. of KOREA`
      ];
      const validTests = validAddresses.map((id:any) => {
        return USER_ADDRESS_SCHEMA.validate(id).then((r:string) => {
          expect(r).to.equal(id);
        });
      });
      await Promise.all(validTests);
      const invalidAddresses = [
        `
        testaddress.testaddress.testaddress.testaddress
        testaddress.testaddress.testaddress.testaddress
        testaddress.testaddress.testaddress.testaddress
        `
      ];
      const invalidTests = invalidAddresses.map((id:any) => {
        return USER_ADDRESS_SCHEMA.validate(id).catch(e=>e).then((r:any) => {
          expect(r.name).to.equal('ValidationError');
          expect(r.value).to.equal(id);
        });
      });
      await Promise.all(invalidTests);
    });
  });

  after(async () => { });
});
