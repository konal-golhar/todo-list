const express=require("express");

const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine','ejs');
var items=[];

app.get("/",function(req,res){
var today=new Date();
var option={
weekday:"long",
day:"numeric",
month:"long"
};
var day=today.toLocaleDateString("en-US",option);

res.render("list",{newdate:day ,newitem:items});

});
app.post("/" ,function(req,res){
 item=req.body.list;
 items.push(item);


res.redirect("/");



})





app.listen(process.env.PORT || 3000,function(req,res){
console.log("running at port 3000");

})
