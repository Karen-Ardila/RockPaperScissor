const Router = require('express').Router;
const userController = require('../controllers/user.controller');

const router = Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUserById);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;