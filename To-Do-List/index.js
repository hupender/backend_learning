import express from "express";
import bodyParser from "body-parser";
const app = express();
var item_work=[];
var item_day=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=> {
    res.render("index.ejs");
});

app.post("/day",(req,res)=> {
    if(req.body.task) {
        item_day.push(req.body.task);
    }
    res.render("index.ejs",{
        list_day: item_day,
        list_work : item_work,
    })
});

app.post("/work",(req,res)=> {
    if(req.body.task) {
        item_work.push(req.body.task);
    }
    res.render("index.ejs",{
        list_day: item_day,
        list_work : item_work,
    })
});

app.listen(3000,()=> {
    console.log("Server started on port 3000");
});