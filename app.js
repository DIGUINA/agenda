const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

var items=["Se Reveilee 👋"];

app.get("/",function(req,res){
  var date= new Date();

  var options={
    day:"numeric",
    weekday:"short",
    month:"long"
};

  var days= date.toLocaleDateString("en-FR", options);
  var time=date.toLocaleTimeString(500);

  res.render("list",({weekOfDay:days , weekOfTime:time, listOfthing:items}));
})


app.post("/",function(req,res){
  var elmt=req.body.elmt1;
  items.push(elmt);

  res.redirect("/");
})




app.listen(3000,function(){
  console.log("my server is on port 3000");
})
