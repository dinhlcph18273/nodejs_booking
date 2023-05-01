import express from 'express';
import { getHomePage } from '../controller/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage);

    return app.use('/', router)
}

module.exports = initWebRoutes;