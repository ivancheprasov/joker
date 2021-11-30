const Router = require('express').Router,
    userRoutes = require('./user'),
    generateRoutes = require('./generate'),
    categoriesRoutes = require('./categories');

module.exports = (app) => {
    const rootRoutes = new Router();
    rootRoutes
        .use('/api/user', userRoutes(app))
        .use('/api/generate', generateRoutes(app))
        .use('/api/categories', categoriesRoutes(app));
    return rootRoutes;
};
