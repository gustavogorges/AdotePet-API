const Event = require('../models/Event')

exports.createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        const event = await Event.create(eventData);
        res.status(201).json(event);
    } catch(error) {
        res.status(400).json({message : error.message})
    }
}