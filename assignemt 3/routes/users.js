const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const user = ["waleed" , "akbar" , "ather"];
router.get('/userData',(req,res)=>{
    res.status(200).send({name: "Waleed" , email: "itswaleedthair@gmail.com"})
})

router.get('/:userID',(req,res)=>{
    const userID = req.params.userID;
    res.status(200).send(user[userID])
})


module.exports = router;