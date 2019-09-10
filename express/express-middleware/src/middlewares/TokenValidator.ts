import Express, { Request, Response, NextFunction } from 'express';


export const checkPublicTokenFromHeader:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    console.log('checkPublicTokenFromHeader called..!');
    return next();
};

export const checkAccessTokenFromHeader:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    console.log('checkAccessTokenFromHeader called..!');
    return next();
};

