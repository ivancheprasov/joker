let Router = require('express').Router;
let userController = require('../controllers/user');

module.exports = (app) => {
    const userRoutes = new Router();
    userRoutes
        .get('/', userController.loadProfile)
        .post('/login', userController.login)
        .post('/register', userController.register);
    return userRoutes;
};