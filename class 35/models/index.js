const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dcse","root","",{
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;