let count=0;
const countRequests=(req,res,next)=>{
   count++;
   req.reqCount=count;
   next();
}

module.exports=countRequests;