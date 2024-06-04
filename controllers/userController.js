const User = require('../models/User')

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData)
        const user = await User.create(userData);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);

        // Send an error response with a valid status code
        return res.status(500).json({ message: 'Failed to register user', error: error.message });
    }
};

exports.getAllUSers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch(error) {
        return res.status(500).json({ message: 'Failed to fetch users', error: error.message})
    }
}

exports.getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({ where: { email }});
        if(user){
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error : 'User not found'})
        }
    } catch(error) {
        return res.status(500).json({ message: 'Failed to get the specific user', error: error.message})
    }
}

exports.getUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if(user){
            res.status(200).json(user);
        } else {
            res.status(404).json({ error : 'User not found'})
        }
    } catch(error) {
        return res.status(500).json({message : 'Failed to get the specific user'})
    }
}