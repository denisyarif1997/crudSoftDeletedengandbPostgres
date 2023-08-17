// routes.js
const {Router} = require('express');
const controller = require('./controller');

const router = Router();



router.get('/', controller.getStudents);
router.post('/', controller.addStudents);
router.get('/:id', controller.getStudentsById);


// ... Add more routes ...

module.exports = router;
