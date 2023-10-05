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

app.get("/",(req,res)=> {
    task.find()
    .then((results)=> {
        var task_list=[];
        for(var i=0;i<results.length;i++) {
            task_list.push(results[i].task);
            // console.log(results[i].task);
        }
        res.render("index.ejs",{
            list: task_list,
        });
    })
    .catch((error)=> {
        console.log(error);
    });
    
});

app.post("/",(req,res)=> {
    if(req.body.task) {
        // create a new task to push to the db
        const task1=new task({
            task: req.body.task
        });
        // insert the from data to the db
        task1.save()
        .then((result)=> {
            console.log(result);
        })
        .catch((error)=> {
            console.log(error);
        });
        // req.body.task=NULL;
    }
    // gets all the elements from the database
    task.find()
    .then((results)=> {
        var task_list=[];
        for(var i=0;i<results.length;i++) {
            task_list.push(results[i].task);
            // console.log(results[i].task);
        }
        res.redirect("/");
    })
    .catch((error)=> {
        console.log(error);
    });
});

app.listen(port,()=> {
    console.log(`Server started on port ${port}`);
});

// command to solver port already in use
// sudo lsof -t -i tcp:3000 | xargs kill -9