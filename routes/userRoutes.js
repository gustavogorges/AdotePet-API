const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUSers);
router.get('/users/email/:email', userController.getUserByEmail);
router.get('/users/id/:id', userController.getUserById);

module.exports = router;