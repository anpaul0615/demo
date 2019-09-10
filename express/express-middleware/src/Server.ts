import Express, { Request, Response, NextFunction } from 'express';
import SessionRouter from './routers/Session';


export default class Server {
  private app:Express.Application;
  private port:number = 3000;

  constructor () {
    this.app = Express();
    this.initRoutes();
  }

  initRoutes() {
    this.app.get('/', (req:Request, res:Response, next:NextFunction) => {
      return res.json({
        message: 'express-middleware',
        data: {}
      });
    });
    this.app.use(SessionRouter);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}!`);
    });
  }
};
