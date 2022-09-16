const mongoose = require('mongoose')
const students = require('../models/students');


//Post API
async function post(req,res){
    try{
        const {name , email} = req.body;
        if(!name || !email){
            return res.status(400).send("something went wrong")
        }
        const student = new students({
            _id : new mongoose.Types.ObjectId(),
            name : name,
            email : email
        });
        await student.save();
        res.status(200).send({createdUser : student})
    }catch(err){
        console.log(err)
        return res.status(400).send("something went wrong")
    }
}

async function getall(req,res){
    try{
        const Students = await students.find();
        res.status(200).send({ Students })
    }catch(err){
        console.log(err)
        return res.status(400).send("something went wrong")
    }
}

async function getsngle(req,res){
    try{
        const { studentid } = req.params
        const student = await students.findById(studentid);
        res.status(200).send({student});
    }catch(err){
        console.log(err)
        return res.status(400).send("something went wrong")
    }
}

async function update(req , res){
    try{
        const { studentid} = req.params
        const { name} = req.body
        const student = await students.UpdateOne({
            _id : studentid,
            name : name
        })
        res.status(200).send({student:student});

    }catch(err){
        console.log(err)
        return res.status(400).send("something went wrong")
    }
}



module.exports =  {
    post,
    getall,
    getsngle,
    update
 
}