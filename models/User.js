const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pet = require('./Pet');

const User = sequelize.define('User', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    telephone : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    bornDate : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
}
, {
    tableName: 'Users'
});

module.exports = User;