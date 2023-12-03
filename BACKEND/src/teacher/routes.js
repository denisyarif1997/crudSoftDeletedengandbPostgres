const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getTeacher);
router.post('/', controller.createTeacher);
router.get('/:id', controller.getTeacherById);
router.put('/:id', controller.updateTeacher);
router.delete('/:id', controller.deleteTeacher);

module.exports = router;
