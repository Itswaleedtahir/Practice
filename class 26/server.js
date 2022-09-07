const express = require("express")

const app = express();

// app.get('/', (req,res)=>{
//     res.status(200).send("Allah is the  greatest");
// })
app.use((req,res,next)=>{
    console.log("im inside app use");
    next();
})

app.get('/users',(req,res)=>{
    const user = ["Waleed", "Ather"]
    res.status(200).send({user})
})





app.listen(4000);