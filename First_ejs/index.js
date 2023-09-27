import express from "express";

const app = express();

// app.set('view engine', 'ejs');

app.get("/",(req,res)=> {
    const d = new Date();
    const day_no=d.getDay();
    var dayType,adv;
    if(day_no==0 || day_no==6) {
        dayType="weekend";
        adv=", let's have some fun."
    }
    else {
        dayType="weekday";
        adv=", get ready for some work."
    }
    res.render("index.ejs",
    {
        daytype:dayType,
        advice:adv,
    });
});


app.listen(3000,()=> {
    console.log("Started server on localhost 3000");
});