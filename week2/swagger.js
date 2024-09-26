const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info:{
  version: '1',
  title: 'temple API',
  description: 'temples'
    },
    host: 'localhost:8080',
    schemes: ['http'],
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile,endpointsFiles, doc)

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
    await import('./index.js')});