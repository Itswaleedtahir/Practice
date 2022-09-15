const Students = require("../models/student");


//Post API
async function post(req,res){
    try{
        const { name, email, password} = req.body;
        if(!name || !email) return res.status(400).send("required fields cannot be empty");
        const emailFound = await Students.findOne({
            where: {email:email}
        });

        if(emailFound) return res.status(400).send("email already exists");

       const Student = await Students.create({
        name:name,
        email:email
       });
        res.status(200).send({Student});
    }catch (err){
        console.log(err);
        res.stauts(500).send("something went wrong")    
    }
}

//Get API
async function getall(req,res){
    try{
        const students = await Students.findAll()
        res.status(200).send({students}); 
    }catch(err){
        console.log(err);
        res.stauts(500).send("something went wrong")   
    }
}
module.exports = {
    post,
    getall
}