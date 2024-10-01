const mongoose=require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(()=>{
    console.log('mongodb connected')
})
.catch((err)=>{
    console.log('mongodb connection failed:'+err);
})