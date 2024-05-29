const User = require('../models/User')

exports.createUser = async (req,res) => {
    try {
        const userData = req.body;
        const user = await User.create(userData);
        res.status(201).json(user);
    } catch(error) {
        res.status(400).json({message : error.message});
    }
};