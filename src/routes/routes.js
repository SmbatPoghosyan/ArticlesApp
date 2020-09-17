const db = require('../../data/db');
const permit = require('../middlewares/authorization');
const authorization = require('../controllers/authorizationController');
const categories = require('../controllers/categoriesController');
const articles = require('../controllers/articlesController');

class AppRoutes {
    constructor(app, multipart) {
        this.app = app;
    }

    routes() {
        this.app.post(`/login`, authorization.login);
        this.app.post(`/signup`, authorization.createUser);
        this.app.get(`/categories`, permit("admin", "moderator", "member"), categories.getAll);
        this.app.post(`/categories`, permit("admin", "moderator"), categories.create);
        this.app.delete(`/categories/:id`, permit("admin"), categories.delete);
        this.app.get(`/articles`, permit("admin", "moderator", "member"), articles.getAll);
        this.app.post(`/articles`, permit("admin", "moderator"), articles.create);
    }
}

module.exports = AppRoutes;
