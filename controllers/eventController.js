const Event = require('../models/Event')

exports.createEvent = async (req, res) => {
    try {
        const {name,address,telephone,email,date,description} = req.body;
        const event = await Event.create({name,address,telephone,email,date,description});
        res.status(201).json(event);
    } catch(error) {
        res.status(400).json({message : error.message})
    }
}