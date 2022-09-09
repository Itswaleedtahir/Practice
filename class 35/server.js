const express = require("express");

const app = express();

app.use(express.json());

const studentRouter = require("./routes/student");
app.use("/api/students", studentRouter);

app.listen(4000 , function (){
    console.log("listening on port 4000")
});