const Router = require('express').Router,
    userRoutes = require('./user'),
    generateRoutes = require('./generate'),
    categoriesRoutes = require('./categories'),
    templatesRoutes = require('./templates');

const path = require("path");

module.exports = (app) => {
    const rootRoutes = new Router();
    rootRoutes
        .use('/api/user', userRoutes(app))
        .use('/api/generate', generateRoutes(app))
        .use('/api/categories', categoriesRoutes(app))
        .use('/api/templates', templatesRoutes(app))
        .get('*', (request, response) =>
            response.sendFile(path.resolve(app.get('APP_ROOT'), 'build', 'index.html'))
        );
    return rootRoutes;
};
