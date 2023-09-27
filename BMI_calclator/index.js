const express=require("express");
// body parser is used to get the values from our html form 
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({entended:true}));
app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {
    // the values given by body parser will be in string form so we need to convert in back to number
    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    res.send("Your BMI is : " + (weight/(height*height)));
});
app.listen(3000,function() {
    console.log("Server started on port 3000");
});