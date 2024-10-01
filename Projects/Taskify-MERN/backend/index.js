// start writing from here
require('dotenv').config();
const cors=require('cors');
const cookieParser=require('cookie-parser');
const express=require('express');
const todoRouter = require('./routes/todo');
const userRouter = require('./routes/user');
require('./db/dbconfig');

const app=express();
app.use(cors({
    origin: process.env.FE_DOMAIN, // Adjust this to your frontend's URL
    exposedHeaders: ['Authorization'], // This allows the Authorization header to be exposed
  }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/todo',todoRouter);
app.use('/api/user',userRouter);

app.listen(process.env.PORT,()=>{
    console.log('server running on port '+process.env.PORT);
})