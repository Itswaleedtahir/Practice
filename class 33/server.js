const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(express.json());

const studentRouter = require('./routes/student');

app.use('/api/students',studentRouter);

mongoose.connect('mongodb+srv://itswaleedtahir:itswaleedtahir123@cluster0.smf6v.mongodb.net/DCSE').then(result=>{
    console.log("database connected")
}).catch(err=>{
    console.log(err)
})


app.listen(4000);