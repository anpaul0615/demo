import Express, { Request, Response, NextFunction } from 'express';
import SwaggerJSDoc from 'swagger-jsdoc';


export default class Server {
  private app:Express.Application;
  private port:number = 3000;

  constructor () {
    this.app = Express();
    this.initMiddleware();
    this.initRoutes();
  }

  initMiddleware() {
    this.app.use(Express.static('public'));
  }

  initRoutes() {
    this.app.get('/documents/spec', (req:Request, res:Response, next:NextFunction) => {
      const swaggerOptions = {
        definition: {
          openapi: '3.0.0',
          info: {
            version: '1.0.0',
            title: 'API Document',
            description: 'API Documentation Powered By OAS 3.0',
          },
          servers: [
            { url: '/' },
          ],
        },
        apis: [
          `${__dirname}/documents-spec/Common.yml`,
          `${__dirname}/documents-spec/*.yml`,
        ]
      };
      return res.json(SwaggerJSDoc(swaggerOptions));
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}!`);
    });
  }
};
