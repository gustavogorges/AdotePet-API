const sequelize = require('../config/database');
const User = require('./User');
const Pet = require('./Pet');

// Define relationships
User.hasMany(Pet, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Pet.belongsTo(User, {
    foreignKey: 'userId'
});

// Export models and sequelize instance
module.exports = {
    User,
    Pet,
    sequelize
};