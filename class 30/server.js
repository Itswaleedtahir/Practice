const express = require('express');
const app = express();
const users = [];
app.use(express.json());

//Post API
app.post('/users',(req,res)=>{
    console.log(req.body);
    const { name } = req.body;
    if(!name || name.length < 3){
        return res.status(400).send("Invalid  name");
    }
    users.push(name);
    res.status(200).send(`${name} added in users successfully`);
})

//Get API
app.get('/users',(req,res)=>{
    res.status(200).send({users});
})

app.get('/users/:userid',(req,res)=>{
    const { userid } = req.params;
    const result = users[userid];
    if(!result){
      return  res.status(400).send("invalid userid")
    }
    res.status(200).send({user :result})
})

//Update API
app.put('/users/:userid',(req,res)=>{
    const { name } = req.body;
    const { userid } = req.params;
    const result = users[userid];

    if(!result){
        res.status(400).send("invalid userid")
    }
    users[userid]=name;
    res.status(200).send({ users})
})

//Delete API
app.delete('/users/:userid',(req,res)=>{
    const {userid} = req.params;
    const result = users[userid];
    if(!result){
        res.status(400).send("invalid userid")
    }
    users.splice(userid,1);
    res.status(200).send({users})
})



//Listening On 4000 port
app.listen(4000)