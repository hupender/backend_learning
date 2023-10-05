import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/to_do",{useNewUrlParser: true});
const toDoSchema = new mongoose.Schema({
    task: String
});
const task=mongoose.model("task",toDoSchema);


const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port=3000;

app.get("/", async function(req,res){
    
    var results = await task.find()

    var task_list=[];
    for(var i=0;i<results.length;i++) {
        task_list.push(results[i].task);
        // console.log(results[i].task);
    }
    res.render("index.ejs",{
        list: task_list,
    });
    
});

app.post("/", async function(req,res){
    if(req.body.task) {
        // create a new task to push to the db
        const task1= new task({
            task: req.body.task
        });
        // insert the from data to the db
        await task1.save()
    }

    res.redirect("/");

});

app.listen(port,()=> {
    console.log(`Server started on port ${port}`);
});

// command to solver port already in use
// sudo lsof -t -i tcp:3000 | xargs kill -9