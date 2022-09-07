const http = require('http');
const fs = require('fs');
const { brotliDecompressSync } = require('zlib');
const { buffer } = require('stream/consumers');

function reqHandler(req,res,next){
    if(req.url === "/"){
        res.setHeader("content-type" , "text/html");
        res.statusCode = 200;
        res.write("<html><body>")
        res.write("<form action = '/users' method = 'POST'>");
        res.write("<input type='text' name='user'>");
        res.write("<button>submit</button>");
        res.write("</form>");
        res.write("</body></html>");
        return res.end();
    }
    if(req.url === "/users" && req.method === "POST"){
        const body = [];
        req.on("data",(chunk)=>{
            body.push(chunk);
        })
        console.log(body);
        req.on("end",()=>{
            console.log(Buffer.concat(body).toString())
            fs.writeFileSync("users.txt" , Buffer.concat(body).toString());
            res.statusCode = 302;
            res.setHeader('Location' , "/");
           return res.end();
        })

        // fs.writeFileSync("users.txt" , "Waleed Tahir");
        // res.statusCode = 302;
        // res.setHeader('Location' , "/");
        // res.end();
    }
}


const server = http.createServer(reqHandler);

server.listen(4000);