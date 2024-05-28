const express = require('express')
const muralPetController = require('../controllers/muralPetController');

const router = express.Router();

router.post('/muralPet',muralPetController.createMuralPet);

module.exports = router;