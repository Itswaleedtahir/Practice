const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const routesEM = require('./routes/emp');

app.use("/api/employee",routesEM);


mongoose.connect('mongodb+srv://itswaleedtahir:itswaleedtahir123@cluster0.smf6v.mongodb.net/interview').then(result=>{
    console.log('DB connection established');
}).catch(err=>{
    console.log(err);
})
app.listen(4000, ()=>{
    console.log("listening on port 4000")
})