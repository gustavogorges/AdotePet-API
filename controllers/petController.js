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

exports.getAllPets = async (req,res) => {
    try {
        const pets = await Pet.findAll();
        res.status(200).json(pets);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
}

exports.getPetsByUserId = async (req,res) => {
    try {
        const userId = req.params.userId;
        const pets = await Pet.findAll({where : {userId}});
        res.status(200).json(pets);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
}