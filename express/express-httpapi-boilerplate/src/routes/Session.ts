import Express, { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';
import {
  validatePublicToken, validateAccessToken
} from '../middlewares/RequestHeaderValidator';
import {
  USER_ID_SCHEMA, USER_PASSWORD_SCHEMA
} from '../models/User.Schema';
import {
  createSession, refreshSession, deleteSession
} from '../controllers/Session';


export default Express.Router()
  // Login
  .post('/sessions',
    validatePublicToken,
    async (req:Request, res:Response, next:NextFunction) => {
      try {
        await Yup.object().shape({
          id: USER_ID_SCHEMA.required(),
          password: USER_PASSWORD_SCHEMA.required(),
        }).validate(req.body);
        return next();
      } catch(e) {
        return res.status(400).json({
          message: e.message,
          error: 'Bad Request',
        });
      }
    },
    createSession)

  // Refresh Login
  .put('/sessions',
    validatePublicToken,
    validateAccessToken,
    refreshSession)

  // Logout
  .delete('/sessions',
    validatePublicToken,
    validateAccessToken,
    deleteSession);
