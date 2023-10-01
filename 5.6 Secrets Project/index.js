import express from "express";
import axios from "axios";
const app=express();
app.use(express.static("public"));

const url="https://secrets-api.appbrewery.com/random";

app.get("/",async(req,res)=> {
    try{
        const result=await axios.get(url);
        res.render("index.ejs",{
            secret:result.data.secret,
            user:result.data.user,
        });
    }
    catch(error) {
        console.error(error.response.data);
    }
});

app.listen(3000,()=> {
    console.log("Server started on port 3000");
});