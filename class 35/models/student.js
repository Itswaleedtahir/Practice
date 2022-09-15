const sequelize = require("./index");
const { DataTypes} = require('sequelize');

const tableName = "students";


//Student Model
const Student = sequelize.define(tableName , {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.CURRENT_TIMESTAMP
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.CURRENT_TIMESTAMP
    },
});


module.exports = Student;