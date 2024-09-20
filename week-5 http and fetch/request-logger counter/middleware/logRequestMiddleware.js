const fs=require('fs');
const requestLogger=(req,res,next)=>{
   const dateObj=new Date();
   const logMessage = 
   `Method: ${req.method}\nTime: ${dateObj.toUTCString()}\nHostName:${req.hostname}\nRoute: ${req.path}\n\n`;
   fs.appendFileSync('log.txt',logMessage,'utf-8');
   next();
}

module.exports=requestLogger;