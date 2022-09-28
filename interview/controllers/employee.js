const mongoose = require('mongoose');
const Employee = require('../models/empl');

async function employeeees(req , res){
    try{
        const { name , Post} = req.body;
        if(!name || !Post)
        return res.status(400).send("Required fields are not provided");
   
        const employee = new Employee({
            _id : mongoose.Types.ObjectId(),
            name: name,
            Post: Post
        });
        await employee.save();
        res.status(200).send({createdUser: employee});
    }catch(err){
        console.log(err)
        return res.status(400).send("something went wrong")
    }
}

module.exports = {
    employeeees
}