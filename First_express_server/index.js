const express = require("express");
const app = express();
// this will send a get request on home route 
app.get("/",function(req,res) {
    // console.log(res);
    res.send("Hello world");
});
// this will send a get request on a different route
app.get("/about",function(req,res) {
    res.send("My name is Hupender");
});

// listen on the port 8000 and call the function
app.listen(8000,function(){
    console.log("Server started on port : 8000");
});