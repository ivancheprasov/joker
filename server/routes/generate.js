const Router = require('express').Router;
const generateController = require('../controllers/generate');

module.exports = (app) => {
    const generateRoutes = new Router();
    generateRoutes
        .post('/', generateController.generate)
    return generateRoutes;
};