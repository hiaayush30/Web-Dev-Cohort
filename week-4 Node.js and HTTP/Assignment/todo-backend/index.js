const express=require('express');
const fs=require('fs');
const app=express();
const uniqid = require('uniqid'); 

// A JSON (JavaScript Object Notation) file is a simple file format used to store structured data
// in a human-readable format. It’s widely used for transmitting data between a server and a web
// application or for configuration files.
// it can store objects,arrays,Strings,Numbers,Booleans,Null
// {
//     "name": "John",                // String
//     "age": 30,                     // Number
//     "isStudent": false,            // Boolean
//     "address": {                   // Object
//       "city": "New York",
//       "zip": 10001
//     },
//     "skills": ["JavaScript", "Node.js", "React"], // Array
//     "salary": null                 // Null
//   }

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({msg:"Todos api"});
});

app.get('/todos',(req,res)=>{
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    res.status(200).json(todos)
})

app.get('todo/:id',(req,res)=>{
    console.log('yo');
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    let todo=todos.filter(todo=>todo.id==req.params.id);
    todo.length==0 ? res.send("Todo not found") :  res.json(todo[0]);
})

app.post('/todo',(req,res)=>{
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    const title=req.body.title;
    todos.push({
        id:uniqid(),
        title
    });
    const response=fs.writeFileSync('todos.json',JSON.stringify(todos),'utf-8');
    console.log(response);
    res.status(200).json({msg:"done"});
})

app.patch('/todo/:id',(req,res)=>{
    const title=req.body.title;
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    todos.map(todo=>{
        if(todo.id==req.params.id){
            todo.title=title
        }
        return todo;
    })
    const response=fs.writeFileSync('todos.json',JSON.stringify(todos),'utf-8');
    console.log(response);
    res.status(200).json({msg:"todo updated!"});
})

app.delete('/todo/:id',(req,res)=>{
    let todos=fs.readFileSync('todos.json','utf-8');
    todos=JSON.parse(todos);
    todos=todos.filter(todo=>todo.id!=req.params.id)
    const response=fs.writeFileSync('todos.json',JSON.stringify(todos),'utf-8');
    console.log(response);
    res.status(200).json({msg:"todo deleted!"});
})

app.listen(3000);