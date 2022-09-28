const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    Post:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    createdAt : {
        type : Date,
        default: Date.now
    },
    updatedAt : {
        type : Date,
        default: Date.now
    }
})

module.exports = mongoose.model('employees',Employee);