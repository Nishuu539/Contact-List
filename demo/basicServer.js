const shruti= require('http');
const port= 5659;
const fs=require("fs");


const nishant= shruti.createServer(requestHandler);
function requestHandler(req,res){
    //console.log(req.url);
    res.writeHead(200,{"content-type":"text/html"});
    //res.end("<h1>Hi! Developer</h1>");
   /**  fs.readFile("./index.html",function(err,data){
        if (err){
            console.log(err);
            return res.end("Error",err);
        }
        res.end(data);
    })**/
    let filePath;
    switch(req.url){
        case "/" :
            filePath="index.html";
            break
        case "/profile":
            filePath="ind.html";
            break
        default:
            filePath="404.html"
    }
    fs.readFile(filePath,function(err,data){
        if (err){
            console.log(err);
            return res.end("chutiya ho gaya hai kya");
        }
        return res.end(data)
    })
}
nishant.listen(port,function(err){
    if (err){
        console.log(err);
        return
    }
    console.log("Server is Running on port Number",port);
});
