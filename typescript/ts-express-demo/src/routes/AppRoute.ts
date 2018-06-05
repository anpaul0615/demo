import { NextFunction, Request, Response, Router } from 'express';

export default class AppRoute {
    constructor() {
    }

    public static init(router: Router) {
        router.get('/', (req:Request, res:Response, next:NextFunction)=>{
            res.json({message:'HTTP GET / :: OK'});
        });

        router.get('/hello2', (req:Request, res:Response, next:NextFunction)=>{
            res.json({message:'HTTP GET /hello :: OK'});
        });
    }
}
