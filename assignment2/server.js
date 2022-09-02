const express = require("express")

const app = express();

app.use((req,res,next)=>{
    console.log(req.url);
    next();
})

app.get('/admins',(req,res)=>{
    const admins = ["Waleed" , "Qazi" , "Umair"]
    res.status(200).send({admins})
})

app.get('/currentuser',(req,res)=>{

    res.status(200).send('welcome waleeed')

})

app.use((req, res)=>{
    res.status(404).send("End Point not Found")
})






app.listen(4000);