import Express, { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../services/JWTHelper';

const { SERVER_PUBLIC_TOKEN_RAW } = process.env;


export const validatePublicToken:Express.RequestHandler
  = (req:Request, res:Response, next:NextFunction) => {
    const publicToken = req.header('x-public-token');
    if (!publicToken) {
      return res.status(400).json({
        message: 'X-Public-Token 이 누락되었습니다..!',
        error: 'Bad Request',
      });
    }
    const decodedPublicToken = Buffer.from(publicToken, 'base64').toString();
    if (decodedPublicToken !== SERVER_PUBLIC_TOKEN_RAW) {
      return res.status(401).json({
        message: '유효하지 않은 X-Public-Token 입니다..!',
        error: 'Unauthorized',
      });
    }
    res.locals.publicToken = decodedPublicToken;
    return next();
};

export const validateAccessToken:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    const accessToken = req.header('x-access-token');
    if (!accessToken) {
      return res.status(400).json({
        message: 'X-Access-Token 이 누락되었습니다..!',
        error: 'Bad Request',
      });
    }
    try {
      const decodedAccessToken = await verifyAccessToken(accessToken);
      res.locals.accessToken = accessToken;
      res.locals.accessTokenData = decodedAccessToken;
      return next();
    } catch(err) {
      return res.status(401).json({
        message: '유효하지 않은 X-Access-Token 입니다..!',
        error: 'Unauthorized',
      });
    }
};

