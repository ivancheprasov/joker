const Router = require('express').Router;
const categoriesController = require('../controllers/categories');

module.exports = (app) => {
    const categoriesRoutes = new Router();
    categoriesRoutes
        .get('/', categoriesController.loadCategories)
        .post('/add', categoriesController.addCategory)
    return categoriesRoutes;
};