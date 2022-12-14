const blogs = [];

//Post API
function post(req,res){
    const { title } = req.body;
    if(!title || title.length < 3){
        return res.status(400).send("Invalid  name");
    }
    blogs.push(title);
    res.status(200).send(`${blogs} added in blogs successfully`);
}

//GET API
function getall(req,res){
    res.status(200).send({blogs})
}

//Single GET API
function getsingle(req,res){
    const { blogId } = req.params;
    const result = blogs[blogId];
    if(!result){
      return  res.status(400).send("invalid blogid")
    }
    res.status(200).send({blogs :result})
}

//PUT API
function update(req,res){
    const { title } = req.body;
    const { blogId } = req.params;
    const result = blogs[blogId];

    if(!result){
        res.status(400).send("invalid blogid")
    }
    blogs[blogId]=title;
    res.status(200).send({ blogs})
}

//DELETE API
function del(req,res){
    const {blogId} = req.params;
    const result = blogs[blogId];
    if(!result){
        res.status(400).send("invalid blogid")
    }
    blogs.splice(blogId,1);
    res.status(200).send({blogs})
}



module.exports={
    post,
    getall,
    getsingle,
    update,
    del
}