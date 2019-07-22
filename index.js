const express = require('express');
const app = express();

app.get("/", (req,res,next)=>{
  console.log('got request!');
  res.json("hello world");
})

app.listen(3000, ()=>{
  console.log('hi i\'m listening');
})
