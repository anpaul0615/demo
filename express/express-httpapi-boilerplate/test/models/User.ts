import { expect } from 'chai';
import * as TypeORM from 'typeorm';
import { User, UserRepository } from '../../src/models/User';
import { allocateDBConnection, releaseDBConnection } from "../../src/services/DBConnectionHelper";


describe('Models.User', () => {
  let connection:TypeORM.Connection = null;
  let userRepository:TypeORM.Repository<User> = null;

  const USER = {
    id: `testuser${(new Date).getMilliseconds()}`,
    password: 'password123',
    name: '테스트사용자',
  };

  before(async () => {
    try {
      connection = await allocateDBConnection();
      userRepository = connection.getCustomRepository(UserRepository);
      console.log('connection init ok..!');
    } catch(e) {
      console.log('connection init fail..!', e);
    }
  });

  context('create()', () => {
    it('should return affected-rows', async () => {
      const insertResult:TypeORM.InsertResult
        = await userRepository.insert(USER);
      expect(insertResult.raw.affectedRows).to.equal(1);
    });
  });

  context('find()', () => {
    it('should return array-result', async () => {
      const founds:User[] = await userRepository.find();
      expect(founds).to.exist;
      expect(founds.length).to.equal(1);
    });
  });

  context('findOne()', () => {
    it('should return object-result', async () => {
      const found:User = await userRepository.findOne(
        { where: { id: USER.id } });
      expect(found).to.exist;
      expect(found.id).to.equal(USER.id);
      expect(found.name).to.equal(USER.name);
    });
  });

  context('update()', () => {
    const updateUserData = {
      name: '테스트사용자222'
    };
    it('should return 1-changed-rows after success', async () => {
      const updateResult:TypeORM.UpdateResult
        = await userRepository.update({ id: USER.id }, updateUserData);
      expect(updateResult.raw.changedRows).to.equal(1);
    });
    context('findOne()', () => {
      it('should return updated-user', async () => {
        const found:User = await userRepository.findOne({ id: USER.id });
        expect(found).to.exist;
        expect(found.name).to.equal(updateUserData.name);
      });
    });
  });

  context('delete()', () => {
    it('should return 1-affected-rows after success', async () => {
      const deleteResult:TypeORM.DeleteResult
        = await userRepository.delete({ id: USER.id });
      expect(deleteResult.raw.affectedRows).to.equal(1);
    });
    context('findOne()', () => {
      it('should return empty-result', async () => {
        const found:User = await userRepository.findOne({ id: USER.id });
        expect(found).not.to.exist;
      });
    })
  });

  after(async () => {
    try {
      await userRepository.createQueryBuilder()
        .delete()
        .where('id LIKE :id', { id: 'testuser%' })
        .execute();
      await releaseDBConnection(connection);
      console.log('clear test-dataset & connection release ok..!');
    } catch(e) {
      console.log('connection release fail..!', e);
    }
  });
});
