
const express =require("express");
const bodyParser=require("body-parser");
const request = require("request");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const name=req.body.name;
    console.log(name);
})
app.listen(3000,function(){
    console.log("server is on");
})
 
// mailchimp api 9c400f07ce26bfc8542a1649980e6df6-us17
// audiece id f8bf5afdaf