let Router = require('express').Router;
let generateController = require('../controllers/generate');

module.exports = (app) => {
    const userRoutes = new Router();
    userRoutes
        .post('/', generateController.generate)
    return userRoutes;
};