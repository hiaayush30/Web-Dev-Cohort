const express=require('express');
const app=express();
const path=require('path');

//serve static files
app.use(express.static(path.join(__dirname,'./public')));
// http://localhost:3000/index.png

//route handler
app.get('/',(req,res)=>{
    res.status(200).json({
        msg:"I am back!"
    })
})

//port on which the process will run and listen for requests
app.listen(3000,()=>{
    console.log('server running on port 3000');
})