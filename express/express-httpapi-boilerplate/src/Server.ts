import 'dotenv/config';
import Express, { Request, Response, NextFunction } from 'express';
import BodyParser from 'body-parser';
import Morgan from 'morgan';
import SessionRouter from './routes/Session';
import UserRouter from './routes/User';

const {
  CORS_ORIGIN, CORS_METHODS, CORS_HEADERS, CORS_CREDENTIALS
} = process.env;
const Server:Express.Application = Express();


Server
  // set request-parser
  .use(BodyParser.urlencoded({ extended: true }))
  .use(BodyParser.json())
  // set logger
  .use(Morgan('dev', {
    skip: (req:Request, res:Response) =>
      req.header('user-agent').includes('node-superagent')
    }))
  // set cors-options
  .use((req:Request, res:Response, next:NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN);
    res.setHeader('Access-Control-Allow-Methods', CORS_METHODS);
    res.setHeader('Access-Control-Allow-Headers', CORS_HEADERS);
    res.setHeader('Access-Control-Allow-Credentials', CORS_CREDENTIALS);
    next();
  })
  // set routes
  .get('/', (req:Request, res:Response, next:NextFunction) => {
    return res.status(200).json({
      message: 'SFDP-API',
      data: {}
    });
  })
  .use(SessionRouter)
  .use(UserRouter)
  // set not-found-handler
  .use((req:Request, res:Response, next:NextFunction) => {
    return res.status(404).json({
      message: '리소스를 찾을 수 없습니다.',
      error: 'Not Found',
    });
  });

export default Server;
