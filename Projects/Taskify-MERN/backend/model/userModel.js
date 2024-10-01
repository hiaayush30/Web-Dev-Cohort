//  start writing from here
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    password:String,
    email:String,
    todos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Todo'
    }]
},{timestamps:true});

const User=mongoose.model('User',userSchema);
module.exports=User;
