//express is just a chain of middlewares
const express=require('express');
const requestLogger = require('./middleware/logRequestMiddleware');
const countRequests=require('./middleware/countRequests');
const app=express();

app.use(requestLogger);
app.use(countRequests);

app.get('/requests',(req,res)=>{
    res.send(`total number of requests recieved are ${req.reqCount}`);
})

app.get('/',(req,res)=>{
    res.send('lfg');
})

app.listen(3000);