import Express, { Request, Response, NextFunction } from 'express';


export const createSession:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    return res.json({
      message: 'Create Session OK!!',
      data: {}
    });
};

export const refreshSession:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    return res.json({
      message: 'Refresh Session OK!!',
      data: {}
    });
};

export const deleteSession:Express.RequestHandler
  = async (req:Request, res:Response, next:NextFunction) => {
    return res.json({
      message: 'Delete Session OK!!',
      data: {}
    });
};

