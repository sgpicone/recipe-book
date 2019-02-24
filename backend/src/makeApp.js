const express = require('express');
const SwaggerParser = require('swagger-parser');
const swaggerRoutes = require('swagger-routes-express');
const api = require('./api');

const makeApp = async () => {
    const parser = new SwaggerParser();
    const apiDescription = await parser.validate('./spec/book-oas2.yml');
    const connect = swaggerRoutes(api, apiDescription);
    const app = express();
    console.log('app created');
    //other app stuff
    
    connect(app);
    console.log('connected app to swagger');

    //error handlers

    return app;
}

module.exports = makeApp;