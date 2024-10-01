const jwt=require('jsonwebtoken');

const todoAuth=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(!token) return res.status(400).json({error:'token not found'});
    try{
       const decoded=jwt.verify(token.split(' ')[1],process.env.JWT_PASS);
       req.username=decoded.username;
       req.userid=decoded.id;
       next()
    }catch(err){
      res.status(400).json({error:'invalid or expired token'})
    }
}

module.exports=todoAuth;