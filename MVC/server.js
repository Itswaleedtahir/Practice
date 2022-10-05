//requiring NPM dependencies
const express= require('express')
const app= express();

//To Json
app.use(express.json());
const userRouter= require('./routes/blogs')

//Server listening on port 4000
app.use('/api/blogs',userRouter)
app.listen(4000)