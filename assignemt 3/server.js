const express = require('express')
const app = express();
const path = require('path');
const userRouter = require('./routes/users')

app.get('/',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"views","index.html"))
})

app.get('/about',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"views/about.html"))
})

app.use('/users',userRouter);


app.listen(4000);