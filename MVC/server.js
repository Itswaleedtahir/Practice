const express= require('express')
const app= express();
app.use(express.json());
const userRouter= require('./routes/blogs')


app.use('/api/blogs',userRouter)
app.listen(4000)