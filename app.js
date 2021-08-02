const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/puneetDB", {useNewUrlParser: true,useUnifiedTopology: true });

let messageSchema ={
  name:String,
  email:String,
  message:String
}
let Message = mongoose.model("Message",messageSchema);

app.get("/",function(req,res){
 res.render("home",{});
});
app.get("/about",function(req,res){
 res.render("about",{});
});
app.get("/contact",function(req,res){
 res.render("contact",{});
});
app.get("/blog",function(req,res){
 res.render("blog",{});
});
app.get("/shop",function(req,res){
  res.render("shop",{});
 });
app.post("/contact",function(req,res){
  let message=new Message({
    name:req.body.name,
    email:req.body.email,
    message:req.body.text
  });
  message.save(function(err){
    if(!err){
      res.redirect("/");
    }
  })
});

app.listen(process.env.PORT,function(req,res){
  console.log("Succesfully Started");
});