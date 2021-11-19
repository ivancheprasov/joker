const Router = require('express').Router,
    userRoutes = require('./user'),
    generateRoutes = require('./generate');

module.exports = (app) => {
    const rootRoutes = new Router();
    rootRoutes
        .use('/api/user', userRoutes(app))
        .use('/api/generate', generateRoutes(app));
    return rootRoutes;
};
