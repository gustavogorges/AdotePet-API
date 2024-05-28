const express = require('express');
const petController = require('../controllers/petController');

const router = express.Router();

router.post('/pets', petController.createPet);

module.exports = router;