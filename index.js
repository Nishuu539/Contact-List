const express= require("express");
const path=require("path");
const port=8000;
const db=require("./config/mongoose");
const Contact=require("./models/contact")
const app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());
app.use(express.static('assets'));
app.get("/",function(req,res){
    Contact.find({},function(err,contacts){
        if (err){
            console.log("error in finding contact");
            return;
            }
        return res.render('home',{
            title:"contacts",
            contact_list:contacts
        });
    /**return res.render("home",{
        title:"First REndering",
        contact_list:contactList
    });**/

    });
});

/*app.get("/practice",function(req,res){
    return res.render("practice",{
        title:"Second Rendering"
    });
})
*/
 

var contactList= [
    {
        name: "Nishant",
        Phone: 9758351167
    },
    {
        name:"Shruti",
        Phone:8840372225
    },
    {
        name:"Anubhav",
        Phone: 9536781524
    }
]

app.post("/create-contact",function(req,res){
    //return res.redirect("/practice");
    /*contactList.push({
        name:req.body.name,
        Phone: req.body.Phone
    });*/
    Contact.create({
        name:req.body.name,
        phone:req.body.Phone
        },function(err,newContact){
            if(err){
                console.log("Error in connecting");
                return;
            }
            console.log("******",newContact);
            return res.redirect("/");
        
            });
});
/**app.get("/",function(req,res){
   // console.log(req);
   // res.send("Hey!Nishant your server is running Good");

   
   
});**/
app.listen(port,function(err){
    if(err){
        console.log("Error in running Server",err);
    }
    console.log("Server is Running on port:",port);
});