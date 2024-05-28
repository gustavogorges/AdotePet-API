const MuralPet = require('../models/MuralPet');

exports.createMuralPet = async (req,res) => {
    try {
        const {file,description} = req.body;
        const muralPet = await MuralPet.create({file,description});
        res.status(201).json(muralPet);
    } catch(error) {
        res.status(400).json({message : error.message})
    }
}