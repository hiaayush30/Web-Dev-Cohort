const jwt = require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    const {token}=req.headers;
    if(!token) return res.status(403).json({
        message:'token not found!'
    })
    try{
        const decoded=jwt.verify(token,"JWT_PASS");
        req.token=decoded;
        next();
    }catch(e){
        console.log(e.message);
        res.status(400).json({
            message:'invalid token'
        })
    }
}

module.exports=authMiddleware;