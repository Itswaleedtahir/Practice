const http = require('http');
const { text } = require('stream/consumers');

const server =  http.createServer(function(req , res){
    var num = 1;
    console.log(num + 1);
    console.log("url" , req.url)
    console.log("method", req.method)
    console.log("header", req.header)

    if(req.url === "/"){
        res.setHeader("content-type","text/html");
        res.statusCode=200;
        res.write("<html><body>");
        res.write("<form method='POST' action='/users'><input type='text'><button>submit</button></form>");
        res.write("</body></html>");
       return res.end();
    }
    if(req.url === "/weather"){
        res.setHeader("content-type","text/html");
        res.statusCode=200;
        res.write("<html><body>");
        res.write("<h1>ALL IS THE GREATEST, weather is too hot</h1>");
        res.write("</body></html>");
       return res.end();
    }
    if(req.url === "/users" && req.method === "POST" ){
        res.write("user created")
        return res.end();
    }

    if(req.url === "/users" && req.method === "GET"){
        var user = ["waleed , tahir"]
        res.write(`${user}`)
        res.end();
    } 
    // res.setHeader("content-type","text/html");
    // res.statusCode=200;
    // res.write("<html><body>");
    // res.write("<h1>ALL IS THE GREATEST</h1>");
    // res.write("</body></html>");
    // res.end();
});

server.listen(8080);
