const http = require("http");


const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to hompage!")
    }else if(req.url === "/about"){
        res.end("Welcome to About!")
    }else if(req.url === "/contact"){
        res.end("Welcome to Contactpage!")
    }
})

server.listen(3000,()=>console.log("server is started at 3000!"))