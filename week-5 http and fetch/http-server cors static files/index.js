// Create an HTTP Server
// It should have 4 routes

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)

const express=require('express');
const cors=require('cors');
const app=express();
const path=require('path');

const corsOptions={
    origin:'http://localhost:55170'
}
app.use(cors(corsOptions));
// Access to fetch at 'http://localhost:3000/add?a=&b=' from origin 'http://127.0.0.1:5500' has
// been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the
// requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors'
// to fetch the resource with CORS disabled.

app.use(express.static(path.resolve('./public')));

app.get('/',(req,res)=>{
    // res.send('lfg');
    res.sendFile(path.join(__dirname,'./public/home.html'))
})

app.get('/multiply',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.status(200).send((a*b).toString());
})
app.get('/add',(req,res)=>{
    const a=Number(req.query.a);
    const b=parseInt(req.query.b);
    res.status(200).send((a+b).toString());
})
app.get('/divide',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.status(200).send((a/b).toString());
})
app.get('/subtract',(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.status(200).send((a-b).toString());
})

app.listen(3000);