//same backend but writing to a normal text file instead of a json file
const express=require('express');
const fs=require('fs');
const uniqid = require('uniqid'); 
const app=express();

app.use(express.json());

app.post('/todo',(req,res)=>{
    const title=req.body.title;
    const todo={
        id:uniqid(),
        title
    }
    let todos=fs.readFileSync('todos.txt','utf-8');
    todos=JSON.parse(todos);
    todos.push(todo);
    fs.writeFileSync('todos.txt',JSON.stringify(todos),'utf-8');
    res.status(200).send('done');
})


app.listen(3000);