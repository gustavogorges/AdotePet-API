const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    address : {
        type : DataTypes.STRING,
        allowNull : false
    },
    telephone : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    date : {
        type : DataTypes.DATE,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    }
    ,
    userId: {
        type : DataTypes.INTEGER,
        references: {
            model : 'Users',
            key: 'id'
        }
    }
}, {
    tableName: 'Events'
})

module.exports = Event;