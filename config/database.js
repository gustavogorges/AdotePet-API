const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('AdotePet', 'root', 'root' ,{
    host:'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;