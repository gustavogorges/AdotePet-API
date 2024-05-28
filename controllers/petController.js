const Pet = require('../models/Pet');

exports.createuser = async (req,res) => {
    try {
        const {name,species,race,castrated,sex,vacinated,deficient} = req.body;
        const pet = await Pet.create({name,species,race,castrated,sex,vacinated,deficient});
        res.status(201).json(user);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
}