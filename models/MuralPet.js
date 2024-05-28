const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MuralPet = sequelize.define('MuralPet', {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true
    },
    file : {
        type : DataTypes.BLOB,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    }
})