const express = require('express')
const path = require('path')
const app = express()
const port = 4000;


//User ARRAY
const users = ['Waleed','Akbar','Ather','Faisal'];

app.use(express.static(path.join(__dirname,'public')))
app.set("view engine","ejs");


//Landing Page
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','index.html'));
})


//GET API
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