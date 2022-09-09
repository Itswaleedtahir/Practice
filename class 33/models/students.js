const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Student = new Schema({
    _id : {
        type : mongoose.Schema.Types.ObjectId
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    verified : {
        type : Boolean,
        required : true,
        default : false
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

module.exports = mongoose.model('student',Student);