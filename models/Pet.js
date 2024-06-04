const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Pet = sequelize.define('Pet', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    species : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    race : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    castrated : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
    },
    sex : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    vacinated : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
    },
    deficient : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
    },
    birthDate : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    location :{
        type : DataTypes.STRING,
        allowNull : false,
    },
    description :{
        type : DataTypes.STRING,
        allowNull : false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
}, {
    tableName: 'Pets'
})

module.exports = Pet;