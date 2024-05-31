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