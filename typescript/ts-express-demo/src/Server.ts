import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import AppRoute from './routes/AppRoute';

export class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.setConfig();
        this.setRoutes();
    }

    private setConfig() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(cookieParser());
        this.app.use(function(err:any, req:express.Request, res:express.Response, next:express.NextFunction){
            err.status = 404;
            next(err);
        });
        if (process.env.NODE_ENV === 'development') {
            this.app.use(logger('dev'));
        }
    }

    private setRoutes() {
        const router:express.Router = express.Router();
        AppRoute.init(router);
        this.app.use(router);
    }
}
