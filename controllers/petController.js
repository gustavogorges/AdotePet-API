const Pet = require('../models/Pet');

exports.createPet = async (req,res) => {
    try {
        const {name,species,race,castrated,sex,vacinated,deficient,userId} = req.body;
        const pet = await Pet.create({name,species,race,castrated,sex,vacinated,deficient,userId});
        res.status(201).json(pet);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
}   