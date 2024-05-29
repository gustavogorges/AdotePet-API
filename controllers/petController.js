const Pet = require('../models/Pet');

exports.createPet = async (req,res) => {
    try {
        const petData = req.body;
        const pet = await Pet.create(petData);
        res.status(201).json(pet);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
}   