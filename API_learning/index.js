import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        content: "Waiting for results ..",
    });
});

const url="http://www.thecocktaildb.com/api/json/v1/1/search.php?API=1&";

app.post("/name",async(req,res)=> {
    try{
        var result= await axios.get(url + "s=" + req.body.value);
        res.render("index.ejs",{
            content: JSON.stringify(result.data),
        });
    } catch(error) {
        console.error(error.message);
    }
});

app.post("/letter",async(req,res)=> {
    try{
        const result= await axios.get(url + "f=" + req.body.value);
        res.render("index.ejs",{
            content: JSON.stringify(result.data),
        });
    } catch(error) {
        console.error(error.message);
    }
});

app.post("/ingredients",async(req,res)=> {
    try{
        const result= await axios.get(url + "i=" + req.body.value);
        res.render("index.ejs",{
            content: JSON.stringify(result.data),
        });
    } catch(error) {
        console.error(error.response.data);
    }
});

app.post("/id",async(req,res)=> {
    try{
        const result= await axios.get(url + "iid=" + req.body.value);
        res.render("index.ejs",{
            content: JSON.stringify(result.data),
        });
    } catch(error) {
        console.error(error.response.data);
    }
});

app.post("/random",async(req,res)=> {
    try{
        const result= await axios.get("http://www.thecocktaildb.com/api/json/v1/1/random.php");
        res.render("index.ejs",{
            content: JSON.stringify(result.data),
        });
    } catch(error) {
        console.error(error.response.data);
    }
});

app.listen(3000,()=> {
    console.log("Server started on port 3000");
});