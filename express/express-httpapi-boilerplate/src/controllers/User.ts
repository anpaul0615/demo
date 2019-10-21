import Express, { Request, Response, NextFunction } from 'express';
import TypeORM from 'typeorm';
import { allocateDBConnection, releaseDBConnection } from "../services/DBConnectionHelper";
import { User, UserRepository } from "../models/User";
import { createAccessToken } from "../services/JWTHelper";
import { hashFromPbkdf2 } from "../services/CryptoHelper";


export const addUser:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    let connection:TypeORM.Connection = null;
    let userRepository:TypeORM.Repository<User> = null; 
    try {
      // open db-connection
      connection = await allocateDBConnection();
      userRepository = connection.getCustomRepository(UserRepository);
      // check duplicated-user
      const { id, password, name, contact, address } = req.body;
      const found = await userRepository.findOne({ id });
      if (found) {
        return res.status(400).json({
          message: '이미 등록된 사용자 아이디 입니다..!',
          error: 'Bad Request',
        });
      }
      // add new-user
      await userRepository.insert({
        id,
        password: await hashFromPbkdf2({ password, salt:id }),
        name, contact, address
      });
      // create access-token
      const accessTokenData = {
        user: {
          id, name, contact, address
        }
      };
      const accessToken = await createAccessToken(accessTokenData);
      // response
      return res.status(200)
        .json({
          message: '사용자 등록이 성공했습니다.',
          data: {
            accessToken,
            accessTokenData,
          }
        });
    } catch(err) {
      console.log(err);
      return res.status(500).json({
        message: '사용자 등록이 실패했습니다..!',
        error: 'Internal Server Error',
      });
    } finally {
      // close db-connection
      await releaseDBConnection(connection);
    }
};

export const retrieveUser:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    let connection:TypeORM.Connection = null;
    let userRepository:TypeORM.Repository<User> = null; 
    try {
      // open db-connection
      connection = await allocateDBConnection();
      userRepository = connection.getCustomRepository(UserRepository);
      // find user 
      const { accessTokenData } = res.locals;
      const { user } = accessTokenData;
      const found = await userRepository.findOne({ id: user.id });
      if (found === undefined) {
        return res.status(400).json({
          message: '등록된 사용자가 없습니다..!',
          error: 'Bad Request',
        });
      }
      // response
      return res.status(200).json({
          message: '사용자 조회가 성공했습니다.',
          data: {
            user: {
              id: found['id'],
              name: found['name'],
              contact: found['contact'],
              address: found['address'], 
            }
          }
        });
    } catch(err) {
      console.log(err);
      return res.status(500).json({
        message: '사용자 조회가 실패했습니다..!',
        error: 'Internal Server Error',
      });
    } finally {
      // close db-connection
      await releaseDBConnection(connection);
    }
};

export const updateUser:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    let connection:TypeORM.Connection = null;
    let userRepository:TypeORM.Repository<User> = null; 
    try {
      // open db-connection
      connection = await allocateDBConnection();
      userRepository = connection.getCustomRepository(UserRepository);
      // find exist-user
      const { accessTokenData } = res.locals;
      const { user } = accessTokenData;
      const found = await userRepository.findOne({ id: user.id });
      if (found === undefined) {
        return res.status(400).json({
          message: '등록된 사용자가 없습니다..!',
          error: 'Bad Request',
        });
      }
      // update user-data
      const { password, name, contact, address } = req.body;
      await userRepository.update(
        { id: user.id },
        {
          password: password
            ? await hashFromPbkdf2({ password, salt:user.id })
            : found['password'],
          name: name || found['name'],
          contact: contact || found['contact'],
          address: address || found['address'],
        });
      // update access-token
      const renewAccessTokenData = {
        id: user.id,
        name: name || found['name'],
        contact: contact || found['contact'],
        address: address || found['address'],
      };
      const renewAccessToken = await createAccessToken(renewAccessTokenData);
      // response
      return res.status(200).json({
          message: '사용자 정보 수정이 성공했습니다.',
          data: {
            accessToken: renewAccessToken,
            accessTokenData: renewAccessTokenData,
          }
        });
    } catch(err) {
      console.log(err);
      return res.status(500).json({
        message: '사용자 정보 수정이 실패했습니다..!',
        error: 'Internal Server Error',
      });
    } finally {
      // close db-connection
      await releaseDBConnection(connection);
    }
};

export const deleteUser:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    let connection:TypeORM.Connection = null;
    let userRepository:TypeORM.Repository<User> = null; 
    try {
      // open db-connection
      connection = await allocateDBConnection();
      userRepository = connection.getCustomRepository(UserRepository);
      // delete user
      const { accessTokenData } = res.locals;
      const { user } = accessTokenData;
      const deleteResult = await userRepository.delete({ id: user.id });
      // check delete-result
      if (deleteResult.raw.affectedRows === 0) {
        return res.status(400).json({
          message: '등록해제할 사용자가 없습니다..!',
          error: 'Bad Request',
        });
      }
      // response success
      return res.status(200).json({
          message: '사용자 등록해제가 성공했습니다.'
        });
    } catch(err) {
      console.log(err);
      return res.status(500).json({
        message: '사용자 등록해제가 실패했습니다..!',
        error: 'Internal Server Error',
      });
    } finally {
      // close db-connection
      await releaseDBConnection(connection);
    }
};
