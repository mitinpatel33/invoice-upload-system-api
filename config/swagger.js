const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Invoice Upload API',
      version: '1.0.0',
      description: 'Invoice Upload, Validation & Processing API'
    },
    servers: [
      { url: 'http://localhost:4000' }
    ]
  },
  apis: ['./routes/*.js']
};

module.exports = swaggerJsDoc(options);
