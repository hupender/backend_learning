import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts",(req,res)=> {
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id",(req,res)=> {
  const index=posts.findIndex((i) => i.id==req.params.id);
  if(index==-1) {
    res.status(404).json({message:"id not found"});
  }
  else {
    res.json(posts[index]);
  }
});

//CHALLENGE 3: POST a new post
app.post("/posts",(req,res)=> {
  const d=new Date();
  lastId++;
  const new_post = {
    id: lastId,
    title: req.body.title,
    content: req.body.Content,
    author: req.body.author,
    date: d,
  }
  posts.push(new_post);
  res.json(new_post);
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req,res)=> {
  const index=posts.findIndex((i) => i.id==req.params.id);
  if(index==-1) {
    res.status(404).json({message:"id not found"});
  }
  else {
    if(req.body.title) {
      posts[index].title=req.body.title;
    }
    if(req.body.content) {
      posts[index].content=req.body.Content;
    }
    if(req.body.author) {
      posts[index].author=req.body.author;
    }
    res.json(posts[index]);
  }
});

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id",(req,res)=> {
  const index=posts.findIndex((i) => i.id==req.params.id);
  posts.splice(index,1);
  res.json({message: "Successfully Deleted"});
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
