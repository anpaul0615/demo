import { expect } from 'chai';
import {
  Connection, Repository, InsertResult, UpdateResult, DeleteResult
} from 'typeorm';
import { User } from '../../src/entity/User';
import * as ConnectionHelper from '../../src/helper/ConnectionHelper';


let connection:Connection = null;


describe('User-Entity', function() {
  before(async function() {
    try {
      connection = await ConnectionHelper.allocate();
      console.log('connection init ok..!');
    } catch(e) {
      console.log('connection init fail..!', e);
    }
  });

  describe('#create()', function() {
    it('should return affected-rows', async function() {
      const userRepository:Repository<User> = connection.getRepository(User);
      const newUser = {
        firstName: 'Paul',
        lastName: 'An',
        age: 29,
      };
      const insertResult:InsertResult = await userRepository.insert(newUser);
      expect(insertResult.raw.affectedRows).to.equal(1);
    });
  });

  describe('#find()', function() {
    it('should return array-result', async function() {
      const userRepository = connection.getRepository(User);
      const founds:User[] = await userRepository.find();
      expect(founds).to.exist;
      expect(founds.length).to.equal(1);
    });
  });

  describe('#findOne()', function() {
    it('should return object-result', async function() {
      const userRepository = connection.getRepository(User);
      const found:User = await userRepository.findOne(
        { where: { firstName: 'Paul', lastName: 'An' } });
      expect(found).to.exist;
      expect(found.firstName).to.equal('Paul');
      expect(found.lastName).to.equal('An');
    });
  });

  describe('#update()', function() {
    it('should return changed-rows', async function() {
      const userRepository = connection.getRepository(User);
      const updateResult:UpdateResult = await userRepository.update(
        { firstName: 'Paul', lastName: 'An' },
        { lastName: 'Ahn' });
      expect(updateResult.raw.changedRows).to.equal(1);
      const found:User = await userRepository.findOne(
        { where: { firstName: 'Paul', lastName: 'Ahn' } });
      expect(found).to.exist;
    });
  });
  
  describe('#delete()', function() {
    it('should return affected-rows', async function() {
      const userRepository = connection.getRepository(User);
      const deleteResult:DeleteResult = await userRepository.delete(
        { firstName: 'Paul', lastName: 'Ahn' });
      expect(deleteResult.raw.affectedRows).to.equal(1);
      const found:User = await userRepository.findOne(
        { where: { firstName: 'Paul', lastName: 'Ahn' } });
      expect(found).not.to.exist;
    });
  });

  after(async function() {
    try {
      await ConnectionHelper.release(connection);
      console.log('connection release ok..!');
    } catch(e) {
      console.log('connection release fail..!', e);
    }
  });
});
