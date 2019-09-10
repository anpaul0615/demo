import Express, { Request, Response, NextFunction } from 'express';
import {
  checkPublicTokenFromHeader, checkAccessTokenFromHeader
} from '../middlewares/TokenValidator';
import {
  createSession, refreshSession, deleteSession
} from '../controllers/Session';


export default Express.Router()
  .post('/sessions',
    checkPublicTokenFromHeader,
    (req:Request, res:Response, next:NextFunction) => {
      console.log('check request validation');
      return next();
    },
    createSession)

  .put('/sessions',
    checkPublicTokenFromHeader, checkAccessTokenFromHeader,
    (req:Request, res:Response, next:NextFunction) => {
      console.log('check request validation');
      return next();
    },
    refreshSession)

  .delete('/sessions',
    checkPublicTokenFromHeader, checkAccessTokenFromHeader,
    (req:Request, res:Response, next:NextFunction) => {
      console.log('check request validation');
      return next();
    },
    deleteSession);

