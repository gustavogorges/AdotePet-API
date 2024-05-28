const sequelize = require('../config/database');
const User = require('./User');
const Pet = require('./Pet');
const Event = require('./Event');

// Define relationships
User.hasMany(Pet, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Pet.belongsTo(User, {
    foreignKey: 'userId'
});
User.hasMany(Event, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})
Event.belongsTo(User, {
    foreignKey: 'userId'
})

// Export models and sequelize instance
module.exports = {
    User,
    Pet,
    Event,
    sequelize
};