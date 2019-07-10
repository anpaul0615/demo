import SwaggerJSDoc from 'swagger-jsdoc';


export default [
  /**
   * Provide API Document
   */
  {
    method: 'GET',
    path: '/documents/{p*}',
    handler: {
      directory: {
          path: '.',
          redirectToSlash: true,
          index: true,
      }
    }
  },
  {
    method: 'GET',
    path: '/documents/view',
    handler: {
      file: 'api-document.html'
    }
  },
  /**
   * Provide API Document Spec
   */
  {
    method: 'GET',
    path: '/documents/spec',
    handler: async () => {
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
          `${__dirname}/../../doc/Common.components.yml`,
          `${__dirname}/../../doc/Common.paths.yml`,
          `${__dirname}/../../doc/Token.schemas.yml`,
          `${__dirname}/../../doc/Token.paths.yml`,
          `${__dirname}/../../doc/*.yml`,
        ],
      };
      return SwaggerJSDoc(swaggerOptions);
    }
  },
];
