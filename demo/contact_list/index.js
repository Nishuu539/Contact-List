const express=require("express");
const port= 5395;
 const app=express();

 app.listen(port,function(err){
     if (err){
         console.log("Error in running Server",err);
        return
     }
     console.log("Nishant ur Server is running on port",port);

 });