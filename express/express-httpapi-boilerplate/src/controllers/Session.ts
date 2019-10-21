import Express, { Request, Response, NextFunction } from 'express';
import TypeORM from 'typeorm';
import { allocateDBConnection, releaseDBConnection } from "../services/DBConnectionHelper";
import { User, UserRepository } from "../models/User";
import { createAccessToken } from "../services/JWTHelper";
import { hashFromPbkdf2 } from "../services/CryptoHelper";


export const createSession:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    let connection:TypeORM.Connection = null;
    let userRepository:TypeORM.Repository<User> = null; 
    try {
      // open db-connection
      connection = await allocateDBConnection();
      userRepository = connection.getCustomRepository(UserRepository);
      // check id & password
      const { id, password } = req.body;
      const found:User = await userRepository.findOne({ where:{ id }});
      if (!found) {
        return res.status(400).json({
          message: '사용자를 찾을 수 없습니다..!',
          error: 'Bad Request',
        });
      }
      if (found['password'] !== await hashFromPbkdf2({ password, salt:id })) {
        return res.status(401).json({
          message: '비밀번호가 올바르지 않습니다..!',
          error: 'Unauthorized',
        });
      }
      // create access-token
      const accessTokenData = {
        user: {
          id: found['id'],
          name: found['name'],
          contact: found['contact'],
          address: found['address'],
        }
      };
      const accessToken = await createAccessToken(accessTokenData);
      // response
      return res.status(200)
        .json({
          message: '로그인이 성공했습니다.',
          data: {
            accessToken,
            accessTokenData,
          }
        });
    } catch(err) {
      console.log(err);
      return res.status(500).json({
        message: '로그인이 실패했습니다..!',
        error: 'Internal Server Error',
      });
    } finally {
      // close db-connection
      await releaseDBConnection(connection);
    }
};

export const refreshSession:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    try {
      // refress access-token
      const { accessTokenData } = res.locals;
      const { user } = accessTokenData;
      const renewAccessTokenData = { user };
      const renewAccessToken = await createAccessToken(renewAccessTokenData);
      // response
      return res.status(200)
        .json({
          message: '로그인 갱신이 성공했습니다.',
          data: {
            accessToken: renewAccessToken,
            accessTokenData: renewAccessTokenData,
          }
        });
    } catch(err) {
      console.log(err);
      return res.status(500).json({
        message: '로그인 갱신이 실패했습니다..!',
        error: 'Internal Server Error',
      });
    }
};

export const deleteSession:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    return res.json({
      message: '로그아웃이 성공했습니다.',
    });
};
