const User = require('../models/User')

exports.createUser = async (req,res) => {
    try {
        const {name,email,telephone,bornDate,password} = req.body;
        const user = await User.create({name,email,telephone,bornDate,password});
        res.status(201).json(user);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
};