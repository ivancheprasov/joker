const Router = require('express').Router;
const templatesController = require('../controllers/templates');

module.exports = (app) => {
    const categoriesRoutes = new Router();
    categoriesRoutes
        .post('/suggest', templatesController.suggestCategories)
        .post('/add', templatesController.addTemplate)
    return categoriesRoutes;
};