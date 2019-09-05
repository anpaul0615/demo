import {
  Connection, Repository, InsertResult, UpdateResult, DeleteResult } from "typeorm";
import { User } from "./entity/User";
import * as ConnectionHelper from './helper/ConnectionHelper';


(async () => {

  // init db connection
  const connection:Connection = await ConnectionHelper.allocate();

  // init repository
  const userRepository:Repository<User> = connection.getRepository(User);
  
  // select all
  const founds:User[] = await userRepository.find();
  console.log(founds);

  // insert
  const newUser = {
    firstName: 'Paul',
    lastName: 'An',
    age: 29,
  };
  const insertResult:InsertResult = await userRepository.insert(newUser);
  console.log(insertResult);

  // select specific
  const found:User = await userRepository.findOne(
    { where: { firstName: 'Paul', lastName: 'An' } });
  console.log(found);

  // udpate
  const updateResult:UpdateResult = await userRepository.update(
    { firstName: 'Paul', lastName: 'An' },
    { lastName: 'Ahn' });
  console.log(updateResult);

  // delete
  const deleteResult:DeleteResult = await userRepository.delete(
    { firstName: 'Paul', lastName: 'Ahn' });
  console.log(deleteResult);

  // release db connection]
  await ConnectionHelper.release(connection);
})();
