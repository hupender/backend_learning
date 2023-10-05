import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port=3000;
var list=[];
app.get("/",(req,res)=> {
    res.render("index.ejs");
});

app.post("/",(req,res)=> {
    if(req.body.task) {
        list.push(req.body.task);
    }
    res.render("index.ejs",{
        list: list,
    });
});

app.listen(port,()=> {
    console.log(`Server started on port ${port}`);
});

// command to solver port already in use
// sudo lsof -t -i tcp:3000 | xargs kill -9