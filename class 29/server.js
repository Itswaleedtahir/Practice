const express = require('express')
const path = require('path')
const app = express()
const port = 4000;

const users = ['Waleed','Akbar','Ather','Faisal'];

app.use(express.static(path.join(__dirname,'public')))
app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','index.html'));
})

app.get('/user/:userID',(req,res)=>{
    const {userID} =req.params;
    const user = users[userID]
    res.status(200).render('index',{
        user : user
    })
})


app.listen(port,()=>{
    console.log(`listening  on port:${port}`);
})