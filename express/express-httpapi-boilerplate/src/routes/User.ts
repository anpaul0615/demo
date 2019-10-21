import Express, { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';
import {
  validatePublicToken, validateAccessToken
} from '../middlewares/RequestHeaderValidator';
import {
  USER_ID_SCHEMA, USER_PASSWORD_SCHEMA,
  USER_NAME_SCHEMA, USER_CONTACT_SCHEMA, USER_ADDRESS_SCHEMA
} from '../models/User.Schema';
import {
  addUser, retrieveUser, updateUser, deleteUser
} from '../controllers/User';


export default Express.Router()
  // Register New User
  .post('/users',
    validatePublicToken,
    async (req:Request, res:Response, next:NextFunction) => {
      try {
        await Yup.object().shape({
          id: USER_ID_SCHEMA.required(),
          password: USER_PASSWORD_SCHEMA.required(),
          name: USER_NAME_SCHEMA.required(),
          contact: USER_CONTACT_SCHEMA.notRequired(),
          address: USER_ADDRESS_SCHEMA.notRequired(),
        }).validate(req.body);
        return next();
      } catch(e) {
        return res.status(400).json({
          message: e.message,
          error: 'Bad Request',
        });
      }
    },
    addUser)

  // Retrieve User Data
  .get('/users/me',
    validatePublicToken,
    validateAccessToken,
    retrieveUser)

  // Update User Data
  .put('/users/me',
    validatePublicToken,
    validateAccessToken,
    async (req:Request, res:Response, next:NextFunction) => {
      try {
        await Yup.object().shape({
          password: USER_PASSWORD_SCHEMA.notRequired(),
          name: USER_NAME_SCHEMA.notRequired(),
          contact: USER_CONTACT_SCHEMA.notRequired(),
          address: USER_ADDRESS_SCHEMA.notRequired(),
        }).validate(req.body);
        return next();
      } catch(e) {
        return res.status(400).json({
          message: e.message,
          error: 'Bad Request',
        });
      }
    },
    updateUser)

  // Unregister User
  .delete('/users/me',
    validatePublicToken,
    validateAccessToken,
    deleteUser);
