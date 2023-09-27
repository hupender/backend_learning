import express from "express";
import bodyParser from "body-parser";
// import { dirname } from "path"
// import { fileURLToPath } from "url";
// const __dirname=dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=> {
    res.sendFile("/public/index.html");
});

app.post("/",(req,res)=> {
    var password=req.body.password;
    if(password=="ILoveProgramming") {
        res.sendFile("/public/secret.html");
    }
    else {
        res.redirect("/");
    }
});


app.listen(3000,() =>{
    console.log("Server listening on port 3000");
});