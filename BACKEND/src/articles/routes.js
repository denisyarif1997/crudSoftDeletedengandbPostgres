// routes.js
const {Router} = require('express');
const controller = require('./controller');

const router = Router();



router.get('/', controller.getArticles);
router.post('/', controller.createArticles);
router.get('/:id', controller.getArticlesById);
router.put('/:id', controller.updateArticleById);
router.delete('/:id', controller.deleteArtikel)


// ... Add more routes ...

module.exports = router;
