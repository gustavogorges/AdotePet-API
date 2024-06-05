const express = require('express');
const petController = require('../controllers/petController');

const router = express.Router();

router.post('/pets', petController.createPet);
router.get('/pets', petController.getAllPets);
router.get('/pets/user/:userId', petController.getPetsByUserId);

module.exports = router;