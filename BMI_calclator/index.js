const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({entended:true}));
app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {
    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    res.send("Your BMI is : " + (weight/(height*height)));
});
app.listen(3000,function() {
    console.log("Server started on port 3000");
});