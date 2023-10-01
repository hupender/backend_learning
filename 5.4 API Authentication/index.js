import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "user";
const yourPassword = "pass";
const yourAPIKey = "55e2ad01-0b39-4c96-9600-cab8f2727486";
const yourBearerToken = "852e7299-8af8-494d-bed2-fd6b4f8f6cd1";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try {
    const response=await axios.get("https://secrets-api.appbrewery.com/random");
    const result=response.data;
    res.render("index.ejs",{
      content: JSON.stringify(result),
    });
  } catch (error) {
    console.log("NO data received");
    console.error(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
  try{
    const response= await axios.get("https://secrets-api.appbrewery.com/all?page=2",{
      auth: {
        username:yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs",{
      content: JSON.stringify(response.data),
    });
  } catch(error) {
    console.error(error.message);
  }
});

app.get("/apiKey", async(req, res) => {
  try{
    const response=await axios.get("https://secrets-api.appbrewery.com/filter?score=5&apiKey="+yourAPIKey);
    res.render("index.ejs",{
      content: JSON.stringify(response.data),
    })
  } catch(error) {
    console.error(error.message);
  }
});

app.get("/bearerToken", async(req, res) => {
  try{
    const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42",{
      headers: {
        "Authorization": "Bearer "+ yourBearerToken,
      }
    });
    res.render("index.ejs",{
      content: JSON.stringify(response.data),
    });
  } catch(error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
